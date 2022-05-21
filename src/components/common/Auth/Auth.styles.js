import styled from "styled-components";

const Container = styled.div`
  padding: 0.7rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const UserName = styled.div`
  cursor: Default;
  position: relative;
  right: 0.5rem;
  font-size: 0.8rem;
  font-family: "Amazon Ember", sans-serif;
`;
const Button = styled.div`
  cursor: pointer;
  font-size: 0.8rem;
  font-family: "Amazon Ember", sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;

export { Container, UserName, Button };
