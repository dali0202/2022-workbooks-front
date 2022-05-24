import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  font-size: 0.7rem;
  &:hover {
    background: #fcfcfc;
  }
  border-radius: 0.5rem;
`;
const QuestionImg = styled.div`
  background: beige;
  height: 19rem;
  width: 19rem;
`;
const Button = styled.div`
  margin-left: auto;
  width: 1.3rem;
  height: 1.3rem;
  background: brown;
`;
const TopBar = styled.div`
  display: flex;
  align-items: center;
  height: 1.5rem;
`;
const BottomBar = styled.div`
  padding: 0.5rem 0 0.5rem;
  display: flex;
  letter-spacing: 0.02rem;
`;
export { Container, QuestionImg, Button, TopBar, BottomBar };
