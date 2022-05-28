import styled from "styled-components";

const Container = styled.div`
  background: white;
  z-index: 2;
  height: 12.5vh;
  position: fixed;
  top: 5vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  height: 7.5vh;
  font-size: 1.4rem;
  font-family: "Amazon Ember", sans-serif;
  cursor: pointer;
`;
const Tabs = styled.div`
  background: white;
  height: 5vh;
  display: flex;
  width: 45vw;
  justify-content: space-between;
`;
const Tab = styled.div`
  letter-spacing: 0.3rem;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-family: "Amazon Ember", sans-serif;
  cursor: pointer;
  text-align: center;
  &: hover {
    color: #0366d6;
    transition: 0.3s;
  }
`;

export { Container, Title, Tabs, Tab };
