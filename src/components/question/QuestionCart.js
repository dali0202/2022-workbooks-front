function QuestionCart({ questionList, onClick }) {
  let id = 0;
  const getId = () => {
    return id++;
  };
  return (
    <div>
      <div>
        {questionList?.map((question) => {
          return (
            <div key={getId}>
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
