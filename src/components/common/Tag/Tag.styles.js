import styled from "styled-components";
import PALETTE from "../../constant/palette";

const Button = styled.button`
  width: 8rem;
  background-color: ${({ color }) => color};
  border: 1px solid rgb(209, 213, 219);
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #111827;
  font-family: "Inter var", ui-sans-serif, system-ui, -apple-system, system-ui,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.775rem;
  font-weight: 400;
  line-height: 1.25rem;
  padding: 0.675rem 0.7rem;
  text-align: center;
  text-decoration: none #d1d5db solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    background-color: ${PALETTE.GRAY1};
  }
  &:active {
    background-color: ${PALETTE.GRAY1};
    opacity: 0.6;
  }
`;

export { Button };
