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

  const addCart = (event) => {
    if (selectedQuestionId.includes(event.target.name)) {
      return;
    }
    setSelectedQuestionId(selectedQuestionId.concat(event.target.name));
    setSelectedQuestionList([
      ...selectedQuestionList,
      {
        id: event.target.name,
        point: event.target.id,
      },
    ]);
    console.log(selectedQuestionList);
  };

  const deleteCart = (event) => {
    setSelectedQuestionId(
      selectedQuestionId.filter((cart) => cart !== event.target.id)
    );
    setSelectedQuestionList(
      selectedQuestionList.filter((cart) => cart.id !== event.target.id)
    );
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
      <SearchedQuestion questionList={questionList} onClick={addCart} />
      <QuestionCart questionList={selectedQuestionList} onClick={deleteCart} />
    </div>
  );
}
export default WorkbookEditPage;
