import React from 'react';
import PropTypes from 'prop-types';

// 加算ボタン
const PlusBtn = ({ onClick }) => (
  <button className="btn_util" onClick={ onClick }>＋</button>
);
PlusBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
// 減算ボタン
const MinusBtn = ({ onClick }) => (
  <button className="btn_util" onClick={ onClick }>ー</button>
);
MinusBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
// 乗算ボタン
const TimesBtn = ({ onClick }) => (
  <button className="btn_util" onClick={ onClick }>×</button>
);
TimesBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
// 除算ボタン
const DivisionBtn = ({ onClick }) => (
  <button className="btn_util" onClick={ onClick }>÷</button>
);
DivisionBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { PlusBtn, MinusBtn, TimesBtn, DivisionBtn };
