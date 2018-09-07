import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  inputValue: 0,
  holdValue: 0,
  resultValue: 0,
  showingResult: false,
  calculate: actionTypes.NONE,
};

// 加減乗
const calc_arith = (state = initialAppState, arith) => {
  switch (arith) {
    case actionTypes.PLUS:
      return state.resultValue + state.inputValue;
    case actionTypes.MINUS:
      return state.resultValue - state.inputValue;
    case actionTypes.TIMES:
      return state.resultValue * state.inputValue;
    case actionTypes.NONE:
      state.resultValue = state.inputValue;
      return state.resultValue;
    default:
      state.resultValue = state.inputValue;
      return state.resultValue;
  }
};

const calculator = (state = initialAppState, action) => {
  let tmp, value;
  switch (action.type) {
    case actionTypes.INPUT_NUMBER:
      return {
        ...state,
        inputValue: state.inputValue * 10 + action.number,
        showingResult: false,
      };
    case actionTypes.PLUS:
    case actionTypes.MINUS:
    case actionTypes.TIMES:
      value = (state.calculate !== actionTypes.NONE) ? calc_arith(state, action.type) : calc_arith(state, actionTypes.NONE);
      return {
        ...state,
        inputValue: 0,
        resultValue: value,
        holdValue: value,
        showingResult: true,
        calculate: action.type,
      };
    case actionTypes.EQUAL:
      value = (state.calculate !== actionTypes.NONE) ? calc_arith(state, state.calculate) : state.inputValue;
      return {
        ...state,
        inputValue: 0,
        resultValue: 0,
        holdValue: value,
        showingResult: true,
        calculate: actionTypes.NONE,
      };
    default:
      return state;
  }
};

export default calculator;
