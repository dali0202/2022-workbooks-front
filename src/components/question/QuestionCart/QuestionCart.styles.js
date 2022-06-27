import styled from 'styled-components';
import PALETTE from '../../constant/palette';

const Item = styled.div`
  padding: 0 1rem 0;
  height: 2rem;
  font-size: 0.8rem;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  top: 1rem;
  &:hover {
    background: ${PALETTE.WHITE_GRAY};
  }
  border-radius: 0.3rem;
`;
const Button = styled.div`
  cursor: pointer;
  margin-left: auto;
`;
export { Item, Button };
