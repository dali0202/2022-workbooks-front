import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import {
  BottomBar,
  Container,
  QuestionImg,
  TopBar,
} from "./QuestionItem.styles";

function QuestionItem({
  question,
  selectedQuestionList,
  setSelectedQuestionList,
  selectedQuestionId,
}) {
  const [isHovering, setIsHovering] = useState(0);

  const addCart = () => {
    if (selectedQuestionId.includes(question.id)) {
      return;
    }
    setSelectedQuestionList([...selectedQuestionList, question]);
  };
  const source = `${question.year}년 ${question.month}월 ${question.grade}학년 ${question.num}번`;
  const point = `${(question.answerRate * 100).toFixed(2)}% ${
    question.point
  }점`;
  return (
    <Container
      onMouseOver={() => setIsHovering(1)}
      onMouseOut={() => setIsHovering(0)}
    >
      <TopBar>
        <div>{question.id}</div>
        {isHovering === 1 ? (
          !selectedQuestionId.includes(question.id) ? (
            <IconButton
              color="primary"
              size="small"
              style={{ marginLeft: "auto" }}
              onClick={addCart}
            >
              <AddIcon fontSize="inherit" />
            </IconButton>
          ) : (
            <Tooltip title="이미 추가된 문제입니다">
              <IconButton size="small" disabled style={{ marginLeft: "auto" }}>
                <AddIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
          )
        ) : (
          ""
        )}
      </TopBar>
      <QuestionImg />
      <BottomBar>
        <div>{source}</div>
        <div style={{ marginLeft: "auto" }}>{point}</div>
      </BottomBar>
    </Container>
  );
}
export default QuestionItem;
