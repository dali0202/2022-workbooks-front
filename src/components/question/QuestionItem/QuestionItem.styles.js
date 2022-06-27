import styled from 'styled-components';
import PALETTE from '../../constant/palette';

const Container = styled.div`
  border: 1px solid ${PALETTE.GRAY};
  border-radius: 0.2rem;
  padding: 0.4rem;
  margin-bottom: 0.4rem;
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  &:hover {
    background: ${PALETTE.WHITE_GRAY};
  }
`;
const QuestionImg = styled.img`
  padding: 0.15rem;
  height: 19rem;
  width: 19rem;
`;
const TopBar = styled.div`
  display: flex;
  align-items: center;
  height: 1.5rem;
`;
const BottomBar = styled.div`
  padding: 0.5rem 0 0.5rem;
  display: flex;
  letter-spacing: 0.02rem;
`;
export { Container, QuestionImg, TopBar, BottomBar };
