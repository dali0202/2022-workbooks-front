import styled from "styled-components";

const LabelDirection = {
  LEFT: {
    bottom: "1rem",
  },
  RIGHT: {
    top: "1rem",
  },
};

const RangeLabel = styled.input`
  position: absolute;
  height: 1.6rem;
  width: 2.8rem;
  font-size: 11px;
  text-align: center;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  ${({ position }) => `${position[0]}:${position[1]}%`};
  ${({ direction }) => LabelDirection[direction]}
`;
const Input = styled.input`
  width: 110%;
  left: -1rem;
  top: -1rem;
  position: absolute;
  border: none;
  pointer-events: none;
  z-index: 10;
  appearance: none;
  opacity: 0;
  &::-webkit-slider-thumb {
    cursor: pointer;
    pointer-events: all;
    width: 2.5rem;
    height: 2rem;
    background-color: red;
    appearance: none;
  }
`;

const Track = styled.div`
  position: relative;
  width: 100%;
  height: 0.3rem;
  background-color: #e1ecf4;
  border-radius: 0.3rem;
`;

const Range = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  ${({ position }) =>
    `left: ${position[0]}%;
    right: ${position[1]}%;`}
  background: #0366d6;
  border-radius: 0.5rem;
`;

const Slider = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const Thumb = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(-0.35rem);
  width: 1rem;
  height: 1rem;
  background-color: #0366d6;
  border-radius: 50%;
  ${({ position }) => `${position[0]}:${position[1]}%`}
`;

export { Input, Track, Range, Slider, Thumb, RangeLabel };
