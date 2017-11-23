import React, { Component } from 'react';

import AuxHoc from '../../hoc/AuxHoc';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  addIngredientHandler = type => {
    const { ingredients, totalPrice } = this.state;
    const updatedIngredients = { ...ingredients };
    const newPrice = totalPrice + INGREDIENT_PRICES[type];
    updatedIngredients[type] = ingredients[type] + 1;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };

  removeIngredientHandler = type => {
    const { ingredients, totalPrice } = this.state;
    if (ingredients[type] <= 0) return;
    const updatedIngredients = { ...ingredients };
    const newPrice = totalPrice - INGREDIENT_PRICES[type];
    updatedIngredients[type] = ingredients[type] + -1;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };

  render() {
    const { ingredients } = this.state;
    const disabledInfo = { ...ingredients };

    Object.keys(disabledInfo).map(key => {
      disabledInfo[key] = disabledInfo[key] <= 0;
      return key;
    });

    return (
      <AuxHoc>
        <Burger ingredients={ingredients} />
        <BurgerControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
        />
      </AuxHoc>
    );
  }
}
export default BurgerBuilder;
