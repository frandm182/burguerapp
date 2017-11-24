import React from 'react';
import PropTypes from 'prop-types';

import AuxHoc from '../../../hoc/AuxHoc';

const orderSummary = ({ ingredients }) => {
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
    </AuxHoc>
  );
};

orderSummary.propTypes = { ingredients: PropTypes.shape({}) };

export default orderSummary;
