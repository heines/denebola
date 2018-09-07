import React from 'react';
import PropTypes from 'prop-types';

// 加算ボタン
const PlusBtn = ({ onClick }) => (
  <button onClick={ onClick }>+</button>
);
PlusBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
// 減算ボタン
const MinusBtn = ({ onClick }) => (
  <button onClick={ onClick }>-</button>
);
MinusBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
// 乗算ボタン
const TimesBtn = ({ onClick }) => (
  <button onClick={ onClick }>*</button>
);
TimesBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
// 除算ボタン
const DivisionBtn = ({ onClick }) => (
  <button onClick={ onClick }>/</button>
);
DivisionBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { PlusBtn, MinusBtn, TimesBtn, DivisionBtn };
