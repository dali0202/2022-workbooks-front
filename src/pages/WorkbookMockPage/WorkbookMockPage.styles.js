import styled from "styled-components";

const Container = styled.div`
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  display: flex;
  justify-content: center;
  height: 82.5vh;
`;

const Form = styled.div`
  position: relative;
  top: 6rem;
  height: 55vh;
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Desc = styled.div`
  text-align: center;
  white-space: pre;
  font-size: 0.8rem;
  line-height: 2rem;
`;

const SelectWrap = styled.div`
  display: flex;
  position: relative;
  bottom: 4rem;
`;

export { Form, Container, Desc, SelectWrap };
