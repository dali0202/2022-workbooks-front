import { useCallback, useEffect, useState } from "react";
import useMovePage from "../../hooks/useMovePage";
import { requestGetQuestionList, requestPostCustomWorkbook } from "../../api";
import QuestionCart from "../../components/question/QuestionCart/QuestionCart";
import QuestionItem from "../../components/question/QuestionItem/QuestionItem";
import {
  CartFrame,
  CartInfo,
  Container,
  Input,
  QuestionCartContainer,
  Questions,
  QuestionSearchContainer,
  SearchedContainer,
  SelectWrap,
} from "./WorkbookCustomPage.styles";
import { Button } from "../WorkbookMockPage/WorkbookMockPage.styles";
import CustomSelect from "../../components/common/Select/CustomSelect";

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
  const gradeList = [
    { value: 0, label: "전체" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
  ];
  const [monthList, setMonthList] = useState([
    { value: 0, label: "전체" },
    { value: 3, label: "3" },
    { value: 6, label: "6" },
    { value: 9, label: "9" },
  ]);
  const pointList = [
    { value: 0, label: "전체" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
  ];
  const sortList = [
    { value: "CREATED_DESC", label: "최신순" },
    { value: "CREATED_ASC", label: "오래된순" },
    { value: "ANSWER_RATE_ASC", label: "정답률 낮은순" },
    { value: "ANSWER_RATE_DESC", label: "정답률 높은순" },
  ];
  const onSetGradeAndMonth = (event) => {
    setGrade(event.target.value);
    if (Number(event.target.value) === 3) {
      setMonthList([
        { value: 0, label: "전체" },
        { value: 3, label: "3" },
        { value: 6, label: "6" },
        { value: 9, label: "9" },
        { value: 11, label: "11" },
      ]);
      return;
    }
    setMonthList([
      { value: 0, label: "전체" },
      { value: 3, label: "3" },
      { value: 6, label: "6" },
      { value: 9, label: "9" },
    ]);
  };

  const onSetMonth = (event) => {
    setMonth(event.target.value);
  };
  const onSetPoint = (event) => {
    setPoint(event.target.value);
  };
  const onSetSort = (event) => {
    setSort(event.target.value);
  };
  const getQuestionList = useCallback(async () => {
    const response = await requestGetQuestionList({
      grade,
      month,
      point,
      page,
      sort,
    });
    setQuestionList(response.data);
  }, [grade, month, point, sort, page]);

  useEffect(() => {
    getQuestionList();
  }, [getQuestionList]);

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
    console.log(grade);
    console.log(month);
    console.log(point);
  }, [grade, month, point]);
  return (
    <Container>
      <QuestionSearchContainer>
        <SelectWrap>
          <CustomSelect
            labelId="custom-grade-select-label"
            id="custom-grade-select"
            label="학년"
            value={grade}
            onChange={onSetGradeAndMonth}
            options={gradeList}
          />
          <CustomSelect
            labelId="custom-month-select-label"
            id="custom-month-select"
            label="월"
            value={month}
            onChange={onSetMonth}
            options={monthList}
          />
          <CustomSelect
            labelId="custom-point-select-label"
            id="custom-point-select"
            label="점수"
            value={point}
            onChange={onSetPoint}
            options={pointList}
          />
          {/* <CustomSelect */}
          {/*  style={{ marginRight: "auto" }} */}
          {/*  placeholder="최신순" */}
          {/*  options={sortList} */}
          {/*  value={sort.value} */}
          {/*  onChange={onSetSort} */}
          {/* /> */}
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
      </QuestionSearchContainer>
      <CartFrame>
        <QuestionCartContainer>
          <Input
            onChange={(event) => setTitle(event.target.value)}
            placeholder="익명의 문제집"
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
