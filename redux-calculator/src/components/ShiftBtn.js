import React from 'react';
import PropTypes from 'prop-types';

const ShiftBtn = ({ onClick }) => (
  <button className="btn_util" onClick={ onClick }>→</button>
);

ShiftBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ShiftBtn;
