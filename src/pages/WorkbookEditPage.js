import { useEffect, useState } from "react";
import {
  FILTER_TYPE,
  QUESTION_SEARCH_TYPE,
  SORT_TYPE,
} from "../components/constant/list";
import QuestionSearchContainerSelect from "../components/question/QuestionSearchContainerSelect";

function WorkbookEditPage() {
  const [searchType, setSearchType] = useState({
    grade: "전체",
    month: "전체",
    point: "전체",
  });
  const [selectedFilter, setSelectedFilter] = useState();
  const [selectedSort, setSelectedSort] = useState(SORT_TYPE.DESC);
  const [selectedQuestion, setSelectedQuestion] = useState([]);

  const searchTypeList = Object.values(QUESTION_SEARCH_TYPE);
  const filterList = Object.values(FILTER_TYPE);
  const sortList = Object.values(SORT_TYPE);

  const getQuestionList = () => {};
  const setQuestionList = () => {};
  const getSelectedQuestion = () => {};
  useEffect(() => {
    console.log(searchType);
  }, [searchType]);
  useEffect(() => {
    getQuestionList();
  }, [getQuestionList]);

  useEffect(() => {
    setQuestionList();
  }, [selectedSort, selectedFilter]);

  useEffect(() => {
    getSelectedQuestion();
  }, [selectedQuestion]);

  return (
    <div>
      {/* <QuestionSearchContainerInput */}
      {/*  searchTypeList={searchTypeList} */}
      {/*  searchType={searchType} */}
      {/*  setSearchType={setSearchType} */}
      {/* /> */}
      <QuestionSearchContainerSelect
        searchTypeList={searchTypeList}
        searchType={searchType}
        setSearchType={setSearchType}
      />
      <button type="button">조회</button>
      {/* <FilterContainer */}
      {/*  filterList={filterList} */}
      {/*  sortList={sortList} */}
      {/*  selectedFilter={selectedFilter} */}
      {/*  setSelectedFilter={setSelectedFilter} */}
      {/*  selectedSort={selectedSort} */}
      {/*  setSelectedSort={setSelectedSort} */}
      {/* /> */}
      {/* <QuestionItem setSelectedQuestion={setSelectedQuestion} /> */}
      {/* <SelectedQuestionContainer */}
      {/*  selectedQuestion={selectedQuestion} */}
      {/*  setSelectedQuestion={setSelectedQuestion()} */}
      {/* /> */}
    </div>
  );
}
export default WorkbookEditPage;
