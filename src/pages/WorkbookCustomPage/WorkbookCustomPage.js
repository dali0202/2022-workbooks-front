import { useEffect, useRef, useState } from "react";
import useMovePage from "../../hooks/useMovePage";
import { requestGetQuestionList, requestPostCustomWorkbook } from "../../api";
import QuestionCart from "../../components/question/QuestionCart/QuestionCart";
import QuestionItem from "../../components/question/QuestionItem/QuestionItem";
import {
  CartFrame,
  CartInfo,
  Container,
  QuestionCartContainer,
  Questions,
  QuestionSearchContainer,
  SearchedContainer,
  SelectWrap,
} from "./WorkbookCustomPage.styles";
import { Button } from "../WorkbookMockPage/WorkbookMockPage.styles";
import CustomSelect from "../../components/common/Select/CustomSelect";
import {
  EXTENDED_MONTH_LIST,
  GRADE_LIST,
  MONTH_LIST,
  POINT_LIST,
  SORT_LIST,
} from "../../components/constant/list";
import {
  INPUT_LABEL_STYLE,
  INPUT_STYLE,
  SELECT_SIZE,
} from "../../components/constant/theme";
import CustomInput from "../../components/common/Input/CustomInput";

function WorkbookCustomPage() {
  const { goWorkbookPage } = useMovePage();
  const [title, setTitle] = useState("");
  const [sort, setSort] = useState("CREATED_DESC");
  const [page, setPage] = useState(0);
  const [questionList, setQuestionList] = useState([]);
  const [selectedQuestionList, setSelectedQuestionList] = useState([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState([]);
  const [grade, setGrade] = useState(0);
  const [month, setMonth] = useState(0);
  const [point, setPoint] = useState(0);
  const [monthList, setMonthList] = useState(MONTH_LIST);
  const gradeList = GRADE_LIST;
  const pointList = POINT_LIST;
  const sortList = SORT_LIST;
  const obsRef = useRef(null);

  const setGradeAndMonth = (event) => {
    setPage(0);
    setQuestionList([]);
    setGrade(event.target.value);
    if (Number(event.target.value) === 3) {
      setMonthList(EXTENDED_MONTH_LIST);
      return;
    }
    setMonthList(MONTH_LIST);
  };
  const onSetMonth = (e) => {
    setPage(0);
    setQuestionList([]);
    setMonth(e.target.value);
  };
  const onSetPoint = (e) => {
    setPage(0);
    setQuestionList([]);
    setPoint(e.target.value);
  };
  const onSetSort = (e) => {
    setPage(0);
    setQuestionList([]);
    setSort(e.target.value);
  };
  // 페이지와 리스트 초기화는 useEffect로 한번에 처리가 가능하지만 useEffect간에 연쇄작용으로 인해 따로 처리

  const getQuestionList = async () => {
    const response = await requestGetQuestionList({
      grade: grade === 0 ? null : grade,
      month: month === 0 ? null : month,
      point: point === 0 ? null : point,
      page,
      sort,
    });
    setQuestionList((prevState) => [...prevState, ...response.data]);
  };

  const createWorkbook = async () => {
    await requestPostCustomWorkbook({ title, selectedQuestionId });
    goWorkbookPage();
  };

  useEffect(() => {
    const selectedQuestions = [];
    selectedQuestionList.map((question) => selectedQuestions.push(question.id));
    setSelectedQuestionId(selectedQuestions);
  }, [selectedQuestionList]);

  useEffect(() => {
    getQuestionList();
  }, [grade, month, point, sort, page]);

  // const obsHandler = (entries) => {
  //   const target = entries[0];
  //   if (target.isIntersecting) {
  //     setPage((prevState) => prevState + 1);
  //   }
  // };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setPage((prevState) => prevState + 1);
        }
      },
      { threshold: 0.5 }
    );
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  // useEffect(() => {
  //   setPage(0);
  //   setQuestionList([]);
  // }, [grade, month, point, sort]);

  return (
    <Container>
      <QuestionSearchContainer>
        <SelectWrap>
          <CustomSelect
            width={SELECT_SIZE.SMALL.width}
            height={SELECT_SIZE.SMALL.height}
            fontSize="0.8rem"
            label="학년"
            value={grade}
            onChange={setGradeAndMonth}
            options={gradeList}
          />
          <CustomSelect
            width={SELECT_SIZE.SMALL.width}
            height={SELECT_SIZE.SMALL.height}
            fontSize="0.8rem"
            label="월"
            value={month}
            onChange={onSetMonth}
            options={monthList}
          />
          <CustomSelect
            width={SELECT_SIZE.SMALL.width}
            height={SELECT_SIZE.SMALL.height}
            fontSize="0.8rem"
            label="점수"
            value={point}
            onChange={onSetPoint}
            options={pointList}
          />
          <CustomSelect
            width={SELECT_SIZE.SMALL.width}
            height={SELECT_SIZE.SMALL.height}
            fontSize="0.8rem"
            value={sort}
            onChange={onSetSort}
            options={sortList}
          />
        </SelectWrap>
        <SearchedContainer>
          {questionList.map((question) => {
            return (
              <QuestionItem
                key={question.id}
                question={question}
                selectedQuestionList={selectedQuestionList}
                setSelectedQuestionList={setSelectedQuestionList}
                selectedQuestionId={selectedQuestionId}
              />
            );
          })}
        </SearchedContainer>
        <div ref={obsRef} />
      </QuestionSearchContainer>
      <CartFrame>
        <QuestionCartContainer>
          <CustomInput
            label="문제집 이름"
            inputStyle={INPUT_STYLE.BASIC}
            labelStyle={INPUT_LABEL_STYLE}
            onChange={(event) => setTitle(event.target.value)}
          />
          <CartInfo>문항 수 {selectedQuestionList.length}</CartInfo>
          <Questions>
            {selectedQuestionList.map((question) => {
              return (
                <QuestionCart
                  key={question.id}
                  question={question}
                  selectedQuestionList={selectedQuestionList}
                  setSelectedQuestionList={setSelectedQuestionList}
                />
              );
            })}
          </Questions>
          <Button
            style={{
              marginTop: "auto",
              alignSelf: "center",
            }}
            onClick={createWorkbook}
          >
            만들기
          </Button>
        </QuestionCartContainer>
      </CartFrame>
    </Container>
  );
}
export default WorkbookCustomPage;
