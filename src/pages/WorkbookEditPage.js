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
  // const [selectedFilter, setSelectedFilter] = useState([]);
  // const [selectedSort, setSelectedSort] = useState(SORT_TYPE.DESC);
  const [questionList, setQuestionList] = useState([]);
  const [selectedQuestionList, setSelectedQuestionList] = useState([]);
  const searchTypeList = Object.values(QUESTION_SEARCH_TYPE);
  // const filterList = Object.values(FILTER_TYPE);
  // const sortList = Object.values(SORT_TYPE);

  const getQuestionList = async () => {
    const response = await requestGetQuestionList({
      grade: searchType.grade,
      month: searchType.month,
      point: searchType.point,
    });
    setQuestionList(response.data);
  };

  const addCart = (event) => {
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
      {/* <SearchedQuestion questionList={questionList} onClick={addCart} /> */}
      {questionList?.map((question) => {
        return (
          <div key={question.id}>
            {question.id} {question.year}년 {question.grade}학년
            {question.month}월 {question.num}번{" "}
            {(question.answerRate * 100).toFixed(2)}%
            <button
              type="button"
              name={question.id}
              id={question.point}
              onClick={addCart}
            >
              추가
            </button>
          </div>
        );
      })}
      {/* <QuestionCart questionList={selectedQuestionList} onClick={deleteCart} /> */}
      {selectedQuestionList?.map((question) => {
        return (
          <div key={question.id}>
            {question.id}번{question.point}점
            <button type="button" id={question.id} onClick={deleteCart}>
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default WorkbookEditPage;
