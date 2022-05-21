function SearchedQuestion({
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
    <tr>
      <td>{question.id}</td>
      <td>{question.year}년</td>
      <td>{question.grade}학년</td>
      <td>{question.month}월</td>
      <td>{question.num}번</td>
      <td>{question.point}점</td>
      <td>{(question.answerRate * 100).toFixed(2)}%</td>
      <td>
        <button type="button" onClick={addCart}>
          {selectedQuestionId.includes(question.id) ? "추가됨" : "추가"}
        </button>
      </td>
    </tr>
  );
}
export default SearchedQuestion;
