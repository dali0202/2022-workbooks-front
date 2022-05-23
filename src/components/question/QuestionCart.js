import { Button, Item } from "./QuestionCart.styles";

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
    <Item>
      <div style={{ width: "20%" }}>{question.id}</div>
      <div style={{ width: "30%" }}>
        {(question.answerRate * 100).toFixed(2)}%
      </div>
      <div>[{question.point}점]</div>
      <Button type="button" id={question.id} onClick={deleteCart}>
        -
      </Button>
    </Item>
  );
}

export default QuestionCart;
