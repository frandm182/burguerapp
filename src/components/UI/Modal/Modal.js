import React from 'react';
import PropTypes from 'prop-types';

import Auxhoc from '../../../hoc/AuxHoc';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

const modal = ({ children, show, closeModal }) => (
  <Auxhoc>
    <Backdrop show={show} clicked={closeModal} />
    <div
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? 1 : 0
      }}
    >
      {children}
    </div>
  </Auxhoc>
);

modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  closeModal: PropTypes.func
};

export default modal;
