import React from 'react';
import PropTypes from 'prop-types';
import classes from './DrawerToggle.css';

const drawerToggle = props => (
  <div
    className={classes.DrawerToggle}
    onClick={props.clicked}
    role="none"
    onKeyDown={e => {
      console.log(e);
    }}
  >
    <div />
    <div />
    <div />
  </div>
);

drawerToggle.propTypes = {
  clicked: PropTypes.func
};

export default drawerToggle;
