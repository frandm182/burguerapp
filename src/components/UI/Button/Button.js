import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

const button = ({ children, clicked, btnType }) => (
  <button
    className={[classes.Button, classes[btnType]].join(' ')}
    onClick={clicked}
  >
    {children}
  </button>
);

button.propTypes = {
  children: PropTypes.node,
  clicked: PropTypes.func,
  btnType: PropTypes.string
};

button.defaultProps = {
  btnType: 'Success'
};

export default button;
