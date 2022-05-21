import styled from "styled-components";
import Select from "react-select";

const CustomSelect = styled(Select)`
  width: 12rem;
  font-size: 0.8rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35rem;
  height: 30rem;
  padding: 1rem;
  position: relative;
  top: 8rem;
`;

const Desc = styled.div`
  text-align: center;
  white-space: pre;
  font-family: "Amazon Ember", sans-serif;
  font-size: 0.8rem;
  line-height: 2rem;
`;

const Option = styled.div`
  font-family: "Amazon Ember", sans-serif;
  font-size: 0.8rem;
  line-height: 2rem;
`;

const Button = styled.button`
  position: relative;
  top: 14rem;
  width: 6rem;
  background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
  border: 0;
  border-radius: 0.75rem;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
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

const Input = styled.input`
  position: relative;
  top: 2rem;
  width: 24rem;
  appearance: none;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 0.375em;
  box-shadow: none;
  box-sizing: border-box;
  color: #363636;
  display: inline-flex;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 0.8rem;
  height: 2.5em;
  justify-content: center;
  line-height: 1.5;
  padding: calc(0.5em - 1px) 1em;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;
`;

export { Container, Button, Desc, Option, CustomSelect, Input };
