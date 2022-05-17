function QuestionCart({ questionList, onClick }) {
  return (
    <div>
      {questionList?.map((question) => {
        return (
          <div key={question.id}>
            {question.id}번{question.point}점
            <button type="button" id={question.id} onClick={onClick}>
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default QuestionCart;
