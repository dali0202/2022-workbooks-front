import styled from "styled-components";

const Container = styled.div`
  background: red;
  height: 20vh;
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Text = styled.div`
  font-family: "Amazon Ember", sans-serif;
  font-size: 13px;
  line-height: 29px;
`;

const Button = styled.button`
  height: 10vh;
  width: 20vh;
  border: 0.1px solid black;
  font-size: 13px;
  text-align: center;
`;

export { Container, Button, Text };
