import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 4vh;
  display: flex;
  align-items: baseline;
  padding: 1.5rem 0 1.5rem;
`;

const Title = styled.div`
  position: absolute;
  left: 5rem;
  font-size: 1.4rem;
  font-family: "Amazon Ember", sans-serif;
  cursor: pointer;
  text-align: center;
`;
const Tabs = styled.div`
  display: flex;
  position: absolute;
  right: 5rem;
  width: 45vw;
  justify-content: space-between;
`;
const Tab = styled.div`
  letter-spacing: 0.3rem;
  display: flex;
  align-items: center;
  height: 2.5rem;
  font-size: 0.8rem;
  font-family: "Amazon Ember", sans-serif;
  cursor: pointer;
  text-align: center;
  &: hover {
    border-bottom: 0.2rem solid green;
    transition: 0.3s;
  }
  &:after {
    content: " ";
    margin-left: -0.3em;
  }
`;

export { Container, Title, Tabs, Tab };
