import * as actionTypes from '../utils/actionTypes';

const initialAppState = { // Object literal
  inputValue: 0,
  holdValue: 0,
  resultValue: 0,
  showingResult: false,
  calculate: actionTypes.NONE,
};

// 加減乗
const calc_arith = (state = initialAppState, arith) => { // arrow function
  switch (arith) {
    case actionTypes.PLUS:
      return state.resultValue + state.inputValue;
    case actionTypes.MINUS:
      return state.resultValue - state.inputValue;
    case actionTypes.TIMES:
      return state.resultValue * state.inputValue;
    case actionTypes.DIVISION:
      return state.resultValue / state.inputValue;
    case actionTypes.NONE:
      state.resultValue = state.inputValue;
      return state.resultValue;
    default:
      state.resultValue = state.inputValue;
      return state.resultValue;
  }
};

const calculator = (state = initialAppState, action) => { // arrow function
  let value;
  switch (action.type) {
    case actionTypes.INPUT_NUMBER:
    case actionTypes.POINT:
    return {
      ...state,
      inputValue: (state.inputValue == '0' ? ( action.number === '.' ? state.inputValue + String(action.number) : String(action.number)) : state.inputValue + String(action.number)),
      showingResult: false,
    };
    case actionTypes.PLUS:
    case actionTypes.MINUS:
    case actionTypes.TIMES:
    case actionTypes.DIVISION:
    case actionTypes.EQUAL:
      state.inputValue = parseFloat(state.inputValue);
      value = (state.calculate !== actionTypes.NONE) ? calc_arith(state, state.calculate) : calc_arith(state, actionTypes.NONE);
      return {
        ...state,
        inputValue: 0,
        resultValue: (action.type === actionTypes.EQUAL ? 0 : value),
        holdValue: value,
        showingResult: true,
        calculate: (action.type === actionTypes.EQUAL ? actionTypes.NONE : action.type),
      };
    case actionTypes.CLEAR:
      return {
        ...state,
        inputValue: 0,
      };
    case actionTypes.ACLEAR:
      return {
        ...state,
        inputValue: 0,
        holdValue: 0,
        resultValue: 0,
        showingResult: false,
        calculate: actionTypes.NONE,
      };
    default:
      return state;
  }
};

export default calculator;
