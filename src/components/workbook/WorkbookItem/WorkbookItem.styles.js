import styled from "styled-components";

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.6rem;
  height: 1.2rem;
  border: 1px solid ${({ color }) => color};
  border-radius: 1rem;
  font-size: 0.75rem;
  color: ${({ color }) => color};
`;

const Tr = styled.div`
  border-bottom: 1px solid #e0e0e0;
  height: 2.2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;
  &:hover {
    background: #f0f0f1;
  }
`;
const Td = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.01071em;
`;
const Hover = styled.div`
  &: hover {
    text-decoration: underline;
  }
`;

export { Tr, Td, Label, Hover };
