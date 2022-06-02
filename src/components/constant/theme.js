import PALETTE from "./palette";

const BUTTON_COLOR = {
  BASIC: PALETTE.WHITE,
  SELECTED: PALETTE.GRAY1,
};
const INPUT_STYLE = {
  LONG: {
    width: "24rem",
    height: "3.2rem",
  },
  BASIC: {
    width: "20rem",
    height: "3.2rem",
  },
  SHORT: {
    width: "12rem",
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
  LONG: {
    width: "11.5rem",
    height: "3.2rem",
  },
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
