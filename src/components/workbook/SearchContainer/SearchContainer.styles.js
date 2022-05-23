import styled from "styled-components";

const SearchWrap = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  width: 10.5rem;
  position: relative;
`;
const Input = styled.input`
  width: 100%;
  border: 1px solid #bbb;
  border-radius: 8px;
  font-size: 0.9rem;
  height: 1.35rem;
  padding: 0 1rem 0;
`;
const Button = styled.img`
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
  height: 1rem;
`;

export { SearchWrap, Input, Button };
