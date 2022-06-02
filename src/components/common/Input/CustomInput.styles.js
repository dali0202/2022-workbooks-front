import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24rem;
  height: 6rem;
`;
const ErrorMessage = styled.div`
  color: red;
  font-size: 0.7rem;
  padding-left: 0.1rem;
`;

export { Container, ErrorMessage };
