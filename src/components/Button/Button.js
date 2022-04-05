import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onClick, ...allyProps }) => (
  <button className={s.Button} type="button" onClick={onClick} {...allyProps}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
