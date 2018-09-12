import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import NumBtn from '../components/NumBtn';
import PointBtn from '../components/PointBtn';
import * as abtn from '../components/ArithmeticBtn';
import Result from '../components/Result';
import EqualBtn from '../components/EqualBtn';
import { ClearBtn, AClearBtn } from '../components/ClearBtn';

class CalculatorContainer extends Component {
  render(){
    const { calculator, actions } = this.props;
    return (
      <div className="calc_body">
        <div>
          <Result result={calculator.showingResult ? calculator.holdValue : calculator.inputValue} />
        </div>
        <div>
          <ClearBtn onClick={actions.onClearClick} />
          <AClearBtn onClick={actions.onAClearClick} />
        </div>
        <div>
          <NumBtn n={1} onClick={() => actions.onNumClick(1)} />
          <NumBtn n={2} onClick={() => actions.onNumClick(2)} />
          <NumBtn n={3} onClick={() => actions.onNumClick(3)} />
          <abtn.DivisionBtn onClick={actions.onDivisionClick} />
        </div>
        <div>
          <NumBtn n={4} onClick={() => actions.onNumClick(4)} />
          <NumBtn n={5} onClick={() => actions.onNumClick(5)} />
          <NumBtn n={6} onClick={() => actions.onNumClick(6)} />
          <abtn.TimesBtn onClick={actions.onTimesClick} />
        </div>
        <div>
          <NumBtn n={7} onClick={() => actions.onNumClick(7)} />
          <NumBtn n={8} onClick={() => actions.onNumClick(8)} />
          <NumBtn n={9} onClick={() => actions.onNumClick(9)} />
          <abtn.MinusBtn onClick={actions.onMinusClick} />
        </div>
        <div>
          <NumBtn n={0} onClick={() => actions.onNumClick(0)} />
          <NumBtn n={'.'} onClick={() => actions.onNumClick('.')} />
          <EqualBtn onClick={actions.onEqualClick} />
          <abtn.PlusBtn onClick={actions.onPlusClick} />
        </div>
      </div>
    );
  }
}

const mapState = (state, ownProps) => ({
  calculator: state.calculator,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapState, mapDispatch)(CalculatorContainer);
