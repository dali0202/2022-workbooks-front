import styled from "styled-components";

const Label = styled.div`
width: 2.6rem;
height: 1.4rem;
  font-size: 0.75rem;
  text-align: center;
  appearance: none;
  color: ${({ color }) => color};
  border-radius: 0.4rem;
  box-sizing: border-box;
  display: inline-block;
  padding: 0.2rem 0.6rem;
  }
`;

const Tr = styled.div`
  border-bottom: 0.1px dotted #bbb;
  height: 2.2rem;
  display: flex;
  align-items: center;
  position: relative;
`;
const Td = styled.div`
  font-size: 0.85rem;
  text-align: center;
`;

export { Tr, Td, Label };
