import React from 'react';
import PropTypes from 'prop-types';

const ClearBtn = ({ onClick }) => (
  <button className="btn_util" onClick={ onClick }>C</button>
);
ClearBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const AClearBtn = ({ onClick }) => (
  <button className="btn_util" onClick={ onClick }>AC</button>
);
AClearBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { ClearBtn, AClearBtn };
