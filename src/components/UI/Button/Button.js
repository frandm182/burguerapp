import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

const button = ({ children, clicked, btnType, disabled }) => (
  <button
    disabled={disabled}
    className={[classes.Button, classes[btnType]].join(' ')}
    onClick={clicked}
  >
    {children}
  </button>
);

button.propTypes = {
  children: PropTypes.node,
  clicked: PropTypes.func,
  btnType: PropTypes.string,
  disabled: PropTypes.bool
};

button.defaultProps = {
  btnType: 'Success',
  disabled: false
};

export default button;
