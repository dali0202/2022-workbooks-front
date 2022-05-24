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
import {
  EXTENDED_MONTH_LIST,
  GRADE_LIST,
  MONTH_LIST,
  POINT_LIST,
  SORT_LIST,
} from "../../components/constant/list";
import { SELECT_SIZE } from "../../components/constant/theme";

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
  const onSetGradeAndMonth = (event) => {
    setGrade(event.target.value);
    if (Number(event.target.value) === 3) {
      setMonthList(EXTENDED_MONTH_LIST);
      return;
    }
    setMonthList(MONTH_LIST);
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
            onChange={onSetGradeAndMonth}
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
