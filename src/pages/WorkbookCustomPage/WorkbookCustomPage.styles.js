import styled from 'styled-components';
import PALETTE from '../../components/constant/palette';

const Container = styled.div`
  display: flex;
  padding: 0 5rem 0;
`;
const QuestionSearchContainer = styled.div`
  position: relative;
  top: 2rem;
  flex-grow: 1;
`;
const CartFrame = styled.div`
  width: 18rem;
  flex-shrink: 0;
`;
const QuestionCartContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-left: 1px solid ${PALETTE.GRAY};
  flex-shrink:0
  height: 82.5vh;
  position: fixed;
  top: 17.5vh;
  right: 0;
`;
const SearchedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  position: relative;
  top: 1.5rem;
`;
const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
`;
const CartInfo = styled.div`
  font-size: 0.8rem;
`;
const Questions = styled.div`
  border: 1px solid ${PALETTE.LIGHT_GRAY};
  border-radius: 0.3rem;
  width: 20rem;
  height: 56vh;
  margin: 1rem 0 1rem;
  overflow: scroll;
`;
export {
  Container,
  QuestionCartContainer,
  QuestionSearchContainer,
  SearchedContainer,
  SelectWrap,
  CartInfo,
  Questions,
  CartFrame,
};
