import * as actionTypes from '../utils/actionTypes';

export const onNumClick = (number) => ({
  type: actionTypes.INPUT_NUMBER,
  number,
});

export const onPointClick = () => ({
  type: actionTypes.POINT,
});

export const onPlusClick = () => ({
  type: actionTypes.PLUS,
});
export const onMinusClick = () => ({
  type: actionTypes.MINUS,
});
export const onTimesClick = () => ({
  type: actionTypes.TIMES,
});
export const onDivisionClick = () => ({
  type: actionTypes.DIVISION,
});
export const onEqualClick = () => ({
  type: actionTypes.EQUAL,
});

export const onClearClick = () => ({
  type: actionTypes.CLEAR,
});
export const onAClearClick = () => ({
  type: actionTypes.ACLEAR,
});
