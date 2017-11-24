import React from 'react';
import PropTypes from 'prop-types';

import AuxHoc from '../../../hoc/AuxHoc';
import Button from '../../UI/Button/Button';

const orderSummary = ({ ingredients, purchaseCanceled, purchaseContinued }) => {
  const ingredientSummary = Object.keys(ingredients).map(igKey => (
    <li key={igKey}>
      <span style={{ textTransform: 'capitali<e' }}>{igKey}</span>:{' '}
      {ingredients[igKey]}
    </li>
  ));
  return (
    <AuxHoc>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={purchaseCanceled}>
        CANCEL
      </Button>
      <Button clicked={purchaseContinued}>CONTINUE</Button>
    </AuxHoc>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.shape({}),
  purchaseCanceled: PropTypes.func,
  purchaseContinued: PropTypes.func
};

export default orderSummary;
