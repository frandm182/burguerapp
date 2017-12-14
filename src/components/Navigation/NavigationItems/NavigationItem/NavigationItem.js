import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './NavigationItem.css';

const navigationItem = ({ children, link, exact }) => (
  <li className={classes.NavigationItem}>
    <NavLink to={link} exact={exact} activeClassName={classes.active}>
      {children}
    </NavLink>
  </li>
);

navigationItem.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
  exact: PropTypes.bool
};
export default navigationItem;
