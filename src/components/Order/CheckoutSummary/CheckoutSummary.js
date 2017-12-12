import React from 'react';
import PropTypes from 'prop-types';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

const checkoutSummary = ({
  ingredients,
  onCheckoutCancelled,
  onCheckoutContinued
}) => (
  <div className={classes.CheckoutSummary}>
    <h1>We hope its taste well</h1>
    <div style={{ width: '100%', margin: 'auto' }}>
      <Burger ingredients={ingredients} />
    </div>
    <Button btnType="Danger" clicked={onCheckoutCancelled}>
      CANCEL
    </Button>
    <Button btnType="Success" clicked={onCheckoutContinued}>
      CONTINUE
    </Button>
  </div>
);

checkoutSummary.propTypes = {
  ingredients: PropTypes.shape({}),
  onCheckoutCancelled: PropTypes.func,
  onCheckoutContinued: PropTypes.func
};

export default checkoutSummary;
