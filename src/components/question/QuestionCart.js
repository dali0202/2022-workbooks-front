function QuestionCart({
  question,
  selectedQuestionId,
  setSelectedQuestionId,
  selectedQuestionList,
  setSelectedQuestionList,
}) {
  const deleteCart = () => {
    // setSelectedQuestionId(
    //   selectedQuestionId.filter((cart) => cart !== question.id)
    // );
    setSelectedQuestionList(
      selectedQuestionList.filter((item) => item !== question)
    );
  };
  return (
    <div key={question.id}>
      {question.id}번{question.point}점
      <button type="button" id={question.id} onClick={deleteCart}>
        삭제
      </button>
    </div>
  );
}

export default QuestionCart;
