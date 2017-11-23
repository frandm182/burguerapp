import React from 'react';
import PropTypes from 'prop-types';
import classes from './Burger.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map(igKey =>
      [...Array(ingredients[igKey])].map(() => (
        <BurgerIngredient key={igKey} type={igKey} />
      ))
    )
    .reduce((arr, el) => arr.concat(el), []);
  console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients</p>;
  }
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
