import styled from "styled-components";

const Container = styled.div`
  position: relative;
  top: 25vh;
  display: flex;
  flex-direction: column;
`;
const Login = styled.a`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
`;
const Text = styled.div`
  color: black;
  width: 14rem;
  text-align: center;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 10px;
  border-radius: 2px;
  width: 40px;
  height: 40px;
  background-color: #fee500;
`;

export { Container, Login, IconBox, Text };
