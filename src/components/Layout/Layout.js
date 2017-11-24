import React from 'react';
import PropTypes from 'prop-types';
import AuxHoc from '../../hoc/AuxHoc';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

const layout = ({ children }) => (
  <AuxHoc>
    <Toolbar />
    <main className={classes.Content}>{children}</main>
  </AuxHoc>
);

layout.propTypes = {
  children: PropTypes.node
};

export default layout;
