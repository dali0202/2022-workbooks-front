import { useEffect, useState } from "react";
import {
  FILTER_TYPE,
  QUESTION_SEARCH_TYPE,
  SORT_TYPE,
} from "../components/constant/list";
import QuestionSearchContainerSelect from "../components/question/QuestionSearchContainerSelect";
import { requestGetQuestionList } from "../service";
import SearchedQuestion from "../components/question/SearchedQuestion";
import QuestionCart from "../components/question/QuestionCart";

function WorkbookEditPage() {
  const [searchType, setSearchType] = useState({
    grade: 0,
    month: 0,
    point: 0,
  });
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [selectedSort, setSelectedSort] = useState(SORT_TYPE.DESC);
  const [questionList, setQuestionList] = useState([]);
  const [selectedQuestionList, setSelectedQuestionList] = useState([]);
  const [selectedId, setSelectedId] = useState([]);

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

  const onAddCart = (event) => {
    console.log(event.target.dataset.question);
    if (!selectedQuestionList.includes(event.target.dataset.question)) {
      return event.target.dataset.question;
    }
  };

  const onDeleteCart = (event) => {
    if (selectedQuestionList.includes(event.target.dataset.question)) {
      setSelectedQuestionList(
        selectedQuestionList.remove(event.target.dataset.question)
      );
    }
  };

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
      <button type="button" onClick={getQuestionList}>
        조회
      </button>
      {/* <FilterContainer */}
      {/*  filterList={filterList} */}
      {/*  sortList={sortList} */}
      {/*  selectedFilter={selectedFilter} */}
      {/*  setSelectedFilter={setSelectedFilter} */}
      {/*  selectedSort={selectedSort} */}
      {/*  setSelectedSort={setSelectedSort} */}
      {/* /> */}
      <SearchedQuestion questionList={questionList} onClick={onAddCart} />
      <QuestionCart
        questionList={selectedQuestionList}
        onClick={onDeleteCart}
      />
    </div>
  );
}
export default WorkbookEditPage;
