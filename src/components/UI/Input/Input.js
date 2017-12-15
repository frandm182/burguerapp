/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.css';

const input = props => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }
  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          onChange={props.changed}
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          onChange={props.changed}
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          onChange={props.changed}
          className={inputClasses.join(' ')}
          value={props.value}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          onChange={props.changed}
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

input.propTypes = {
  elementType: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  changed: PropTypes.func,
  invalid: PropTypes.bool,
  shouldValidate: PropTypes.bool,
  touched: PropTypes.bool,
  elementConfig: PropTypes.shape({
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        displayValue: PropTypes.string
      })
    )
  })
};

export default input;
