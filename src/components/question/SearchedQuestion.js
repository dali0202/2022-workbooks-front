function SearchedQuestion({ questionList, onClick }) {
  return (
    <div>
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
              onClick={onClick}
            >
              추가
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default SearchedQuestion;
