import { useCallback, useEffect, useState } from "react";
import { SORT_TYPE } from "../components/constant/list";
import { requestGetQuestionList, requestPostCustomWorkbook } from "../api";
import SearchedQuestion from "../components/question/SearchedQuestion";
import QuestionCart from "../components/question/QuestionCart";
import useMovePage from "../hooks/useMovePage";
import FilterContainer from "../components/workbook/FilterContainer";
import Select from "../components/common/Select/Select";

function WorkbookEditPage() {
  const { goBoardPage } = useMovePage();

  const [title, setTitle] = useState("");
  const sortList = Object.keys(SORT_TYPE);
  const [selectedSort, setSelectedSort] = useState(sortList[0]);
  // const filterList = Object.values(FILTER_TYPE);

  const [page, setPage] = useState(0);
  const [questionList, setQuestionList] = useState([]);
  const [selectedQuestionList, setSelectedQuestionList] = useState([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState([]);

  const [grade, setGrade] = useState(0);
  const [month, setMonth] = useState(0);
  const [point, setPoint] = useState(0);
  const gradeList = [0, 1, 2, 3];
  const pointList = [0, 2, 3, 4];
  const [monthList, setMonthList] = useState([0, 3, 6, 9, 11]);

  const setGradeAndMonth = (_grade) => {
    setGrade(_grade);
    if (Number(_grade) === 3) {
      setMonthList([0, 3, 6, 9, 11]);
      return;
    }
    setMonthList([0, 3, 6, 9]);
  };
  const getQuestionList = useCallback(async () => {
    const response = await requestGetQuestionList({
      grade,
      month,
      point,
      page,
      sort: SORT_TYPE[selectedSort],
    });
    setQuestionList(response.data);
  }, [grade, month, point, selectedSort, page]);

  useEffect(() => {
    getQuestionList();
  }, [getQuestionList]);

  const createWorkbook = async () => {
    await requestPostCustomWorkbook({ title, selectedQuestionId });
    goBoardPage();
  };
  useEffect(() => {
    const selectedQuestions = [];
    selectedQuestionList.map((question) => selectedQuestions.push(question.id));
    setSelectedQuestionId(selectedQuestions);
  }, [selectedQuestionList]);
  useEffect(() => {
    console.log(selectedSort);
  }, [selectedSort]);

  return (
    <div>
      <h5>문제집 이름</h5>
      <input onChange={(event) => setTitle(event.target.value)} />
      <h5>문제 검색</h5>
      <Select name="학년" optionList={gradeList} setOption={setGradeAndMonth} />
      <Select name="월" optionList={monthList} setOption={setMonth} />
      <Select name="점수" optionList={pointList} setOption={setPoint} />
      <FilterContainer
        sortList={sortList}
        setSelectedFilter={setSelectedSort}
      />
      <table>
        <tbody>
          {questionList.map((question) => {
            return (
              <SearchedQuestion
                key={question.id}
                question={question}
                selectedQuestionList={selectedQuestionList}
                setSelectedQuestionList={setSelectedQuestionList}
                selectedQuestionId={selectedQuestionId}
              />
            );
          })}
        </tbody>
      </table>
      <table>
        <tbody>
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
        </tbody>
      </table>
      <div>
        <button type="button" onClick={createWorkbook}>
          문제집 만들기
        </button>
      </div>
    </div>
  );
}
export default WorkbookEditPage;
