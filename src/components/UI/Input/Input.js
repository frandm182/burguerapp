/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.css';

const input = props => {
  let inputElement = null;
  switch (props.inputType) {
    case 'input':
      inputElement = <input className={classes.InputElement} {...props} />;
      break;
    case 'textarea':
      inputElement = <textarea className={classes.InputElement} {...props} />;
      break;
    default:
      inputElement = <input className={classes.InputElement} {...props} />;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

input.propTypes = {
  inputType: PropTypes.string,
  label: PropTypes.string
};

export default input;
