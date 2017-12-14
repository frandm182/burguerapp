/* eslint-disable react/no-unused-state, no-restricted-syntax, prefer-const, guard-for-in */
import React from 'react';
import PropTypes from 'prop-types';

import classes from './Order.css';

const Order = ({ price, ingredients }) => {
  const newIngredients = [];
  for (const ingredientName in ingredients) {
    newIngredients.push({
      name: ingredientName,
      amount: ingredients[ingredientName]
    });
  }
  const ingredientOutput = newIngredients.map(ig => (
    <span
      key={ig.name}
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '1px solid #ccc',
        padding: '5px'
      }}
    >
      {ig.name} ({ig.amount})
    </span>
  ));
  return (
    <div className={classes.Order}>
      <p>Ingredients:{ingredientOutput}</p>
      <p>
        Price: <strong> USD {Number.parseFloat(price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

Order.propTypes = {
  price: PropTypes.string,
  ingredients: PropTypes.shape({})
};

export default Order;
