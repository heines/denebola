import React from 'react';
import PropTypes from 'prop-types';

const NumBtn = ({n, onClick}) => (
  <button className="btn_util" onClick={onClick}>{n}</button>
);

NumBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NumBtn;
