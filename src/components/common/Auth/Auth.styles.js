import styled from "styled-components";

const Container = styled.div`
  padding: 1.3rem 0 0;
  height: 2vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: end;
`;

const UserName = styled.div`
  cursor: Default;
  position: relative;
  right: 5.5rem;
  font-size: 0.7rem;
  font-family: "Amazon Ember", sans-serif;
`;
const Button = styled.div`
  position: relative;
  right: 5rem;
  cursor: pointer;
  font-size: 0.7rem;
  font-family: "Amazon Ember", sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;

export { Container, UserName, Button };
