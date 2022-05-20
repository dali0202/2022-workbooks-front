import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  font-size: 14px;
  display: flex;
  background-color: black;
  color: #f0ffff;
  padding: 13px;
  align-items: center;
`;

const Tab = styled.div`
  display: inline;

  padding: 0.5rem;
  cursor: pointer;
  &: hover {
    color: gray;
    transform: scale(1.08);
    transition: 0.5s;
  } ;
`;

const Title = styled.div`
  font-size: 20px;
  color: #03a9f4;
  display: inline;
  padding: 0.5rem;
  cursor: pointer;
`;
const User = styled.div``;
export { Container, Tab, Title, User };
