import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #a7aaad;
  border-radius: 0.2rem;
  padding: 0.4rem;
  margin-bottom: 0.4rem;
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  &:hover {
    background: #f0f0f1;
  }
`;
const QuestionImg = styled.img`
  padding: 0.15rem;
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
