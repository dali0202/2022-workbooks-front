import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
`;
const Item = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32rem;
`;
const Items = styled.div`
  transform: translateX(-${({ curIndex }) => curIndex * 100}%);
  white-space: nowrap;
  transition: transform 0.3s;
`;
export { Container, Item, Items };
