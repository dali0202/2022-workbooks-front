import { useCallback, useEffect, useState } from "react";
import Select from "react-select";
import useMovePage from "../../../hooks/useMovePage";
import {
  requestGetQuestionList,
  requestPostCustomWorkbook,
} from "../../../api";
import QuestionCart from "../../question/QuestionCart";
import QuestionItem from "../../question/QuestionItem";
import {
  CartInfo,
  Container,
  CustomSelect,
  Input,
  QuestionCartContainer,
  Questions,
  QuestionSearchContainer,
  SearchedContainer,
  SelectWrap,
} from "./Custom.styles";
import { Button } from "../Mock/Mock.styles";

function Custom() {
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
  const onSetGradeAndMonth = (_grade) => {
    setGrade(_grade.value);
    if (Number(_grade.value) === 3) {
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

  const onSetMonth = (_month) => {
    setMonth(_month.value);
  };
  const onSetPoint = (_point) => {
    console.log(_point.value);
    console.log("hi");
    setPoint(_point.value);
  };
  const onSetSort = (_sort) => {
    setSort(_sort.value);
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
            name="학년"
            placeholder="전체"
            options={gradeList}
            value={grade.value}
            onChange={onSetGradeAndMonth}
          />
          <div>학년</div>
          <CustomSelect
            name="월"
            placeholder="전체"
            options={monthList}
            value={month.value}
            onChange={onSetMonth}
          />
          <div>월</div>
          <CustomSelect
            name="점수"
            placeholder="전체"
            options={pointList}
            value={point.value}
            onChange={onSetPoint}
          />
          <div>점수</div>
          <CustomSelect
            style={{ marginRight: "auto" }}
            placeholder="최신순"
            options={sortList}
            value={sort.value}
            onChange={onSetSort}
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
    </Container>
  );
}
export default Custom;
