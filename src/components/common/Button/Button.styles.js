import styled from "styled-components";
import PALETTE from "../../constant/palette";

const Container = styled.button`
  width: 5rem;
  background: ${PALETTE.BRAND_COLOR};
  border: 1px solid ${PALETTE.BRAND_COLOR};
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
  font-size: 0.9rem;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;

  &:active {
    background-color: initial;
    background-position: 0 0;
    color: ${PALETTE.BRAND_COLOR};
    opacity: 0.5;
  }
`;
export { Container };
