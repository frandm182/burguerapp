import React from 'react';
import PropTypes from 'prop-types';
import AuxHoc from '../../hoc/AuxHoc';
import classes from './Layout.css';

const layout = ({ children }) => (
  <AuxHoc>
    <div>Toolbar, sideDrawer, Backdrop</div>
    <main className={classes.Content}>{children}</main>
  </AuxHoc>
);

layout.propTypes = {
  children: PropTypes.node
};

export default layout;
