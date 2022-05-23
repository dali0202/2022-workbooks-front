import styled from "styled-components";
import { HEAD } from "../../components/constant/tableSetting";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Table = styled.div`
  position: relative;
  top: 1.5rem;
  width: 42rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Thead = styled.div`
  height: 1.5rem;
  display: flex;
  align-items: center;
  top: 1rem;
  position: relative;
`;
const Column = styled.div`
  font-size: 0.75rem;
  text-align: center;
  color: #b7b3bc;
`;
const Tbody = styled.div`
  top: 2.5rem;
  position: relative;
`;
const Side = styled.div``;
export { Container, Table, Thead, Column, Tbody, Side };
