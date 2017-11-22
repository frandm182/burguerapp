import React from 'react';
import PropTypes from 'prop-types';
import AuxHoc from '../../hoc/AuxHoc';

const layout = ({ children }) => (
  <AuxHoc>
    <div>Toolbar, sideDrawer, Backdrop</div>
    <main>{children}</main>
  </AuxHoc>
);

layout.propTypes = {
  children: PropTypes.node
};

export default layout;
