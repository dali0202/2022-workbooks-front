import styled from "styled-components";

const Container = styled.div`
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  display: flex;
  justify-content: center;
  height: 197.5vh;
`;
const Form = styled.div`
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 35rem;
  height: 170vh;
  position: relative;
  top: 6rem;
`;

const Desc = styled.div`
  text-align: center;
  white-space: pre;
  font-size: 0.8rem;
  line-height: 2rem;
`;

const Button = styled.button`
  width: 6rem;
  background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
  border: 0;
  border-radius: 0.75rem;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;

  font-size: 0.8rem;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;

  &:focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }
  &:hover {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }
`;

const Label = styled.div`
  font-size: 0.6rem;
  align-self: end;
  position: relative;
  bottom: 0.2rem;
  font-size: 0.6rem;
`;
const Option = styled.div`
  display: flex;
  flex-direction: column;
`;
const TagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export { Container, Form, Desc, Option, Button, Label, TagWrap };
