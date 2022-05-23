function QuestionItem({
  question,
  selectedQuestionList,
  setSelectedQuestionList,
  selectedQuestionId,
}) {
  const addCart = () => {
    if (selectedQuestionId.includes(question.id)) {
      return;
    }
    setSelectedQuestionList([...selectedQuestionList, question]);
  };
  return (
    <div>
      <div>{question.id}</div>
      <div>{question.year}년</div>
      <div>{question.grade}학년</div>
      <div>{question.month}월</div>
      <div>{question.num}번</div>
      <div>{question.point}점</div>
      <div>{(question.answerRate * 100).toFixed(2)}%</div>
      <div>
        <button type="button" onClick={addCart}>
          {selectedQuestionId.includes(question.id) ? "추가됨" : "추가"}
        </button>
      </div>
    </div>
  );
}
export default QuestionItem;
