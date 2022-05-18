import { useState } from "react";

function SearchedQuestion({
  question,
  selectedQuestionId,
  setSelectedQuestionId,
  selectedQuestionList,
  setSelectedQuestionList,
}) {
  const [isAdd, setIsAdd] = useState(false);
  const addCart = () => {
    if (selectedQuestionList.includes(question)) {
      return;
    }
    // if (selectedQuestionId.includes(question.id)) {
    //   return;
    // }
    // setSelectedQuestionId(selectedQuestionId.concat(question.id));
    setSelectedQuestionList([...selectedQuestionList, question]);
    setIsAdd(true);
  };
  return (
    <div key={question.id}>
      {question.id} {question.year}년 {question.grade}학년
      {question.month}월 {question.num}번{" "}
      {(question.answerRate * 100).toFixed(2)}%
      <button type="button" onClick={addCart}>
        {isAdd ? "삭제" : "추가"}
      </button>
    </div>
  );
}
export default SearchedQuestion;
