function QuestionCart({ questionList, onClick }) {
  return (
    <div>
      <div>
        {questionList?.map((question) => {
          return (
            <div key={question.id}>
              {question.id}
              {question.point}점
              <button type="button" data-question={question} onClick={onClick}>
                삭제
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default QuestionCart;
