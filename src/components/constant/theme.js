import PALETTE from "./palette";

const BUTTON_COLOR = {
  BASIC: PALETTE.WHITE,
  SELECTED: PALETTE.GRAY1,
};
const INPUT_STYLE = {
  BASIC: {
    width: "15rem",
    height: "3.2rem",
  },
  SMALL: {
    width: "6rem",
    height: "2.5rem",
  },
};
const INPUT_LABEL_STYLE = {
  fontSize: "0.8rem",
};

const SELECT_SIZE = {
  BASIC: {
    width: "7rem",
    height: "3.2rem",
  },
  SMALL: {
    width: "6rem",
    height: "2.5rem",
  },
};

export { BUTTON_COLOR, INPUT_STYLE, SELECT_SIZE, INPUT_LABEL_STYLE };
