import styled from "styled-components";
import { HEAD } from "../../components/constant/tableSetting";

const Container = styled.div`
  position: relative;
  width: 42rem;
  display: flex;
  flex-direction: column;
`;
const Table = styled.div``;
const Thead = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
`;
const Column = styled.div`
  font-size: 0.8rem;
  text-align: center;
  color: gray;
`;
const Tbody = styled.div`
  position: relative;
  top: 3rem;
`;
export { Container, Table, Thead, Column, Tbody };
