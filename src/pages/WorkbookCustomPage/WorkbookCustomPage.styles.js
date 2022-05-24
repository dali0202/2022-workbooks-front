import styled from "styled-components";
import Select from "react-select";

const Container = styled.div`
  display: flex;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  padding: 0 5rem 0;
  position: relative;
  top: 2rem;
`;
const QuestionSearchContainer = styled.div`
  flex-grow: 1;
`;
const CartFrame = styled.div`
  width: 18rem;
  flex-shrink: 0;
`;
const QuestionCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink:0
  width: 14rem;
  height: 68vh;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: fixed;
  top: 10rem;
  right: 5rem;
`;
const SearchedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  position: relative;
  top: 1.5rem;
`;
const CustomSelect = styled(Select)`
  font-size: 0.7rem;
`;
const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
`;

const Input = styled.input`
  position: relative;
  width: 14rem;
  appearance: none;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 0.375em;
  box-shadow: none;
  box-sizing: border-box;
  color: #363636;
  display: inline-flex;
  font-size: 0.8rem;
  height: 2.4rem;
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
const CartInfo = styled.div`
  font-size: 0.8rem;
`;
const Questions = styled.div`
  height: 50vh;
  overflow: scroll;
`;
export {
  Container,
  QuestionCartContainer,
  QuestionSearchContainer,
  SearchedContainer,
  CustomSelect,
  SelectWrap,
  Input,
  CartInfo,
  Questions,
  CartFrame,
};
