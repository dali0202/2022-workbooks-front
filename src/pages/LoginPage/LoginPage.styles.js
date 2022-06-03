import styled from "styled-components";

const Container = styled.div`
  position: relative;
  top: 24vh;
  height: 13rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Login = styled.a`
  border: 0.1px solid #a7aaad;
  border-radius: 0.3rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  &:hover {
    background: #f0f0f1;
  }
`;
const Text = styled.div`
  font-size: 0.8rem;
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
