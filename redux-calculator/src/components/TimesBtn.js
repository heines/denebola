import React from 'react';
import PropTypes from 'prop-types';

const TimesBtn = ({ onClick }) => (
  <button onClick={ onClick }>*</button>
);

TimesBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default TimesBtn;
