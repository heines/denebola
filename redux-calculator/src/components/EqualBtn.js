import React from 'react';
import PropTypes from 'prop-types';

const EqualBtn = ({ onClick }) => (
  <button onClick={ onClick }>=</button>
);

EqualBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default EqualBtn;
