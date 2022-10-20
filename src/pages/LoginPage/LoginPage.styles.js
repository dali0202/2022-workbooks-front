import styled from 'styled-components';
import PALETTE from '../../components/constant/palette';

const Container = styled.div`
  position: relative;
  top: 24vh;
  height: 9rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Login = styled.div`
  border: 0.1px solid ${PALETTE.GRAY};
  border-radius: 0.3rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  &:hover {
    background: ${PALETTE.WHITE_GRAY};
  }
`;
const Text = styled.div`
  font-size: 0.8rem;
  color: black;
  width: 14rem;
  text-align: center;
`;

export { Container, Login, Text };
