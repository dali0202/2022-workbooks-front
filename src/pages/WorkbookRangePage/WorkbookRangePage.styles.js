import styled from 'styled-components';

const Container = styled.div`
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif;
  display: flex;
  justify-content: center;
  height: 197.5vh;
`;
const Form = styled.div`
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 24rem;
  height: 170vh;
  position: relative;
  top: 6rem;
`;

const Desc = styled.div`
  text-align: center;
  white-space: pre;
  font-size: 0.8rem;
  line-height: 2rem;
`;

const Label = styled.div`
  font-size: 0.7rem;
`;
const Option = styled.div`
  display: flex;
  flex-direction: column;
`;
const TagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export { Container, Form, Desc, Option, Label, TagWrap };
