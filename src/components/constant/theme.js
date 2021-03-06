import PALETTE from './palette';

const QUESTION_DESCRIPTION_SIZE = {
  width: '26rem',
  height: '26rem',
};
const BUTTON_COLOR = {
  BASIC: PALETTE.WHITE,
  SELECTED: PALETTE.WHITE_GRAY,
};
const BUTTON_SIZE = {
  TINY: { width: '3.6rem' },
  SMALL: { width: '5rem' },
  BASIC: { width: '20rem' },
  LONG: { width: '24rem' },
};
const INPUT_STYLE = {
  LONG: {
    width: '24rem',
    height: '3.2rem',
  },
  BASIC: {
    width: '20rem',
    height: '3.2rem',
  },
  SHORT: {
    width: '12rem',
    height: '3.2rem',
  },
  SMALL: {
    width: '6rem',
    height: '2.5rem',
  },
  TINY: {
    width: '3rem',
    height: '2rem',
  },
};
const INPUT_LABEL_STYLE = {
  fontSize: '0.8rem',
};

const SELECT_SIZE = {
  LONG: {
    width: '11.5rem',
    height: '3.2rem',
  },
  BASIC: {
    width: '7rem',
    height: '3.2rem',
  },
  SMALL: {
    width: '6rem',
    height: '2.5rem',
  },
};

export {
  QUESTION_DESCRIPTION_SIZE,
  BUTTON_COLOR,
  BUTTON_SIZE,
  INPUT_STYLE,
  SELECT_SIZE,
  INPUT_LABEL_STYLE,
};
