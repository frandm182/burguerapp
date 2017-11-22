import React from 'react';
import PropTypes from 'prop-types';
import classes from './Burger.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const Burger = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients).map(igKey =>
    [...Array(ingredients[igKey])].map(() => (
      <BurgerIngredient key={igKey} type={igKey} />
    ))
  );
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.shape({})
};
export default Burger;
