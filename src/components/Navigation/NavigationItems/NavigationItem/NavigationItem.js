import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavigationItem.css';

const navigationItem = ({ children, link, active }) => (
  <li className={classes.NavigationItem}>
    <a href={link} className={active ? classes.active : null}>
      {children}
    </a>
  </li>
);

navigationItem.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
  active: PropTypes.bool
};

export default navigationItem;
