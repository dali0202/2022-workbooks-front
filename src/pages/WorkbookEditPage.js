import { useEffect, useState } from "react";
import {
  FILTER_TYPE,
  QUESTION_SEARCH_TYPE,
  SORT_TYPE,
} from "../components/constant/list";
import QuestionSearchContainer from "../components/question/QuestionSearchContainer";
import { requestGetQuestionList, requestPostCustomWorkbook } from "../api";
import SearchedQuestion from "../components/question/SearchedQuestion";
import QuestionCart from "../components/question/QuestionCart";
import useMovePage from "../hooks/useMovePage";

function WorkbookEditPage() {
  const { goBoardPage } = useMovePage();
  const [title, setTitle] = useState("");
  const [searchType, setSearchType] = useState({
    grade: 0,
    month: 0,
    point: 0,
  });
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [selectedSort, setSelectedSort] = useState(SORT_TYPE.DESC);
  const [questionList, setQuestionList] = useState([]);
  const [selectedQuestionList, setSelectedQuestionList] = useState([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState([]);
  const searchTypeList = Object.values(QUESTION_SEARCH_TYPE);
  const filterList = Object.values(FILTER_TYPE);
  const sortList = Object.values(SORT_TYPE);

  const getQuestionList = async () => {
    const response = await requestGetQuestionList({
      grade: searchType.grade,
      month: searchType.month,
      point: searchType.point,
    });
    setQuestionList(response.data);
  };

  const createWorkbook = async () => {
    await requestPostCustomWorkbook({ title, selectedQuestionId });
    goBoardPage();
  };
  useEffect(() => {
    const selectedQuestions = [];
    selectedQuestionList.map((question) => selectedQuestions.push(question.id));
    setSelectedQuestionId(selectedQuestions);
  }, [selectedQuestionList]);
  return (
    <div>
      <h5>문제집 이름</h5>
      <input
        onChange={(event) => setTitle(event.target.value)}
        placeholder="문제집 이름을 입력하세요."
      />
      <h5>문제 검색</h5>
      <QuestionSearchContainer
        searchTypeList={searchTypeList}
        searchType={searchType}
        setSearchType={setSearchType}
        onClick={getQuestionList}
      />
      {/* <FilterContainer */}
      {/*  filterList={filterList} */}
      {/*  sortList={sortList} */}
      {/*  selectedFilter={selectedFilter} */}
      {/*  setSelectedFilter={setSelectedFilter} */}
      {/*  selectedSort={selectedSort} */}
      {/*  setSelectedSort={setSelectedSort} */}
      {/* /> */}
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
