import styled from "styled-components";

const Container = styled.div`
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  display: flex;
  justify-content: center;
  height: 82.5vh;
`;

const Form = styled.div`
  position: relative;
  top: 6rem;
  height: 55vh;
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Desc = styled.div`
  text-align: center;
  white-space: pre;
  font-size: 0.8rem;
  line-height: 2rem;
`;

const SelectWrap = styled.div`
  display: flex;
  position: relative;
  bottom: 4rem;
`;

const Button = styled.button`
  width: 6rem;
  display: inline-block;
  outline: 0;
  cursor: pointer;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  vertical-align: middle;
  border: 1px solid;
  border-radius: 6px;
  color: #0366d6;
  background-color: #fafbfc;
  border-color: #1b1f2326;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;

  &:hover {
    color: #ffffff;
    background-color: #0366d6;
    border-color: #1b1f2326;
    box-shadow: rgba(27, 31, 35, 0.1) 0px 1px 0px 0px,
      rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset;
    transition-duration: 0.1s;
  }
`;

export { Form, Container, Button, Desc, SelectWrap };
