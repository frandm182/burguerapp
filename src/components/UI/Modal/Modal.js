import React from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';

const modal = ({ children, show }) => (
  <div
    className={classes.Modal}
    style={{
      transform: show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: show ? 1 : 0
    }}
  >
    {children}
  </div>
);

modal.propTypes = { children: PropTypes.node, show: PropTypes.bool };

export default modal;
