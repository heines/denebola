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
    default:
      state.resultValue = state.inputValue;
      return state.resultValue;
  }
};

const calculator = (state = initialAppState, action) => {
  let tmp;
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
      if(state.calculate !== actionTypes.NONE) {
        tmp = calc_arith(state, action.type);
      } else {
        tmp = calc_arith(state, actionTypes.NONE);
      }

      return {
        ...state,
        inputValue: 0,
        resultValue: tmp,
        holdValue: tmp,
        showingResult: true,
        calculate: action.type,
      };
    case actionTypes.EQUAL:
      switch(state.calculate) {
        case actionTypes.PLUS:
        case actionTypes.MINUS:
        case actionTypes.TIMES:
          tmp = calc_arith(state, state.calculate);
          break;
        default:
          tmp = state.inputValue;
          break;
      }
      return {
        ...state,
        inputValue: 0,
        resultValue: 0,
        holdValue: tmp,
        showingResult: true,
        calculate: actionTypes.NONE,
      };
    default:
      return state;
  }
};

export default calculator;
