import styled from "styled-components";

const Item = styled.div`
  height: 2rem;
  font-size: 0.8rem;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  top: 1rem;
  &:hover {
    background: #fcfcfc;
  }
  border-radius: 0.5rem;
`;
const Button = styled.div`
  cursor: pointer;
  margin-left: auto;
`;
export { Item, Button };
