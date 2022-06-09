import styled from "styled-components";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 82.5vh;
`;
const Question = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 40rem;
  height: 32rem;
`;
const Nav = styled.div`
  padding: 1rem;
  font-size: 0.7rem;
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Input = styled.input`
  border: 1px solid #a7aaad;
  border-radius: 0.2rem;
  font-size: inherit;
  text-align: center;
  width: 2.4rem;
  height: 1.6rem;
`;
export { Form, Question, Container, Nav, Input };
