import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  inputValue: 0,
  holdValue: 0,
  resultValue: 0,
  showingResult: false,
  calculate: actionTypes.NONE,
};

const calc_plus = (state = initialAppState) => {
  return state.resultValue + state.inputValue;
};

const calculator = (state = initialAppState, action) => {
  if (action.type === actionTypes.INPUT_NUMBER) {
    return {
      ...state,
      inputValue: state.inputValue * 10 + action.number,
      showingResult: false,
    };
  } else if (action.type === actionTypes.PLUS) {
    let tmp = calc_plus(state);
    return {
      ...state,
      inputValue: 0,
      resultValue: tmp,
      holdValue: tmp,
      showingResult: true,
      calculate: actionTypes.PLUS,
    };
  } else if (action.type === actionTypes.EQUAL) {
    let tmp
    if(state.calculate == actionTypes.PLUS){ // switchに書き換える
      tmp = calc_plus(state)
    } else {
      tmp = state.inputValue
    }

    return { // return の中では基本的に分岐できない（あるいは即時関数や三項演算子などを使用すること）
      ...state,
      inputValue: 0,
      resultValue: 0,
      holdValue: tmp,
      showingResult: true,
      calculate: actionTypes.NONE,
    };
  } else {
    return state;
  }
};

export default calculator;
