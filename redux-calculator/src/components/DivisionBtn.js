import React from 'react';
import PropTypes from 'prop-types';

const DivisionBtn = ({ onClick }) => (
  <button onClick={ onClick }>/</button>
);

DivisionBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DivisionBtn;
