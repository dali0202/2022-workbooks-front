import styled from 'styled-components';
import PALETTE from '../../components/constant/palette';

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
  border: 1px solid ${PALETTE.GRAY_WHITE};
  border-radius: 4px;
`;
const Thead = styled.div`
  font-weight: 550;
  height: 3.2rem;
  display: flex;
  border-bottom: 1px solid ${PALETTE.GRAY_WHITE};
  align-items: center;
`;
const Column = styled.div`
  font-size: 0.85rem;
  text-align: center;
`;
const Tbody = styled.div``;
export { Container, Table, Thead, Column, Tbody };
