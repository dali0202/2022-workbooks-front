import styled from "styled-components";

const Label = styled.div`
width: 3.2rem;
height: 1.4rem;
  font-size: 0.7rem;
  text-align: center;
  appearance: none;
  background-color: ${({ color }) => color};
  color: white;
  border-radius: 0.4rem;
  box-sizing: border-box;
  display: inline-block;
  padding: 0.2rem 0.6rem;
  }
`;

const Tr = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  position: relative;
  top: 3rem;
`;
const Td = styled.div`
  font-size: 0.8rem;
  text-align: center;
`;

export { Tr, Td, Label };
