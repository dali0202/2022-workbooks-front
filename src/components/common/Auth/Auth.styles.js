import styled from "styled-components";

const Container = styled.div`
  z-index: 2;
  position: fixed;
  background: white;
  width: 100vw;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const UserName = styled.div`
  cursor: Default;
  font-size: 0.7rem;
  font-family: "Amazon Ember", sans-serif;
`;
const Button = styled.div`
  padding: 0 1.5rem 0 1rem;
  cursor: pointer;
  font-size: 0.7rem;
  font-family: "Amazon Ember", sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;

export { Container, UserName, Button };
