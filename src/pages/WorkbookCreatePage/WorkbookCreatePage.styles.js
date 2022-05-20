import styled from "styled-components";

const Text = styled.div`
  font-family: "Amazon Ember", sans-serif;
  font-size: 13px;
  line-height: 29px;
`;
const Container = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Button = styled.button`
  height: 20vh;
  width: 20vh;
  border: 0.1px solid black;
  font-size: 13px;
  text-align: center;
`;

export { Container, Button, Text };
