import styled from "styled-components";

const buttonStyle = {
  WIDE: {
    width: "100px",
  },
};

const Container = styled.button`
  background-color: ${({ color }) => color};
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember", sans-serif;
  font-size: 13px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  &: hover {
    background-color: #f7fafa;
  }
  &: focus {
    border-color: #008296;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }
  ${({ sizeType }) => buttonStyle[sizeType]}
`;
export { Container };
