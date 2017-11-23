import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControl.css';

const buildControl = ({ label }) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
);

buildControl.propTypes = {
  label: PropTypes.string
};
export default buildControl;
