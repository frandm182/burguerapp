import React from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';

const modal = ({ children }) => <div className={classes.Modal}>{children}</div>;

modal.propTypes = { children: PropTypes.node };

export default modal;
