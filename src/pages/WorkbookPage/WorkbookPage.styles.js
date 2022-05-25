import styled from "styled-components";

const Container = styled.div`
  position: relative;
  top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Table = styled.div`
  width: 50em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 4px;
`;
const Thead = styled.div`
  border-bottom: 1px solid rgb(224, 224, 224);
  font-weight: 550;
  height: 3.2rem;
  display: flex;
  align-items: center;
`;
const Column = styled.div`
  font-size: 0.85rem;
  text-align: center;
`;
const Tbody = styled.div``;
const Side = styled.div``;
export { Container, Table, Thead, Column, Tbody, Side };
