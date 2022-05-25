import styled from "styled-components";
import { Button } from "@mui/material";

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  height: 1.8rem;
`;
const Input = styled.input`
  border: 1px solid #bbb;
  border-radius: 0.2rem;
  width: 14rem;
  height: 100%;
  padding: 0 0.8rem 0;
`;
const CustomButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bbb;
  border-radius: 0.2rem;
  width: 3.6rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: tomato;
  }
`;

export { SearchWrap, Input, Button, CustomButton };
