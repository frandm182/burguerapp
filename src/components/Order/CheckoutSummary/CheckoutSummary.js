import React from 'react';
import PropTypes from 'prop-types';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

const checkoutSummary = ({ ingredients }) => (
  <div className={classes.CheckoutSummary}>
    <h1>We hope its taste well</h1>
    <div style={{ width: '100%', margin: 'auto' }}>
      <Burger ingredients={ingredients} />
    </div>
    <Button btnType="Danger" clicked>
      CANCEL
    </Button>
    <Button btnType="Success" clicked>
      CONTINUE
    </Button>
  </div>
);

checkoutSummary.propTypes = {
  ingredients: PropTypes.shape({})
};

export default checkoutSummary;
