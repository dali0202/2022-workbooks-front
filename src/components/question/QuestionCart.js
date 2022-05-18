function QuestionCart({
  question,
  selectedQuestionList,
  setSelectedQuestionList,
}) {
  const deleteCart = () => {
    setSelectedQuestionList(
      selectedQuestionList.filter((item) => item !== question)
    );
  };
  return (
    <tr>
      <td>{question.id}</td>
      <td>번{question.point}점</td>
      <td>
        <button type="button" id={question.id} onClick={deleteCart}>
          삭제
        </button>
      </td>
    </tr>
  );
}

export default QuestionCart;
