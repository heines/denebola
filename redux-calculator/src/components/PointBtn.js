import React from 'react';
import PropTypes from 'prop-types';

const PointBtn = ({onClick}) => (
  <button onClick={ onClick }>.</button>
);

PointBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PointBtn;
