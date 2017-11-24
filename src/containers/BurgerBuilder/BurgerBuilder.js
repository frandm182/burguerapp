import React, { Component } from 'react';

import AuxHoc from '../../hoc/AuxHoc';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  updatePurchaseState(ingredients) {
    const finalSum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0);
    const purchasable = finalSum > 0;
    this.setState({ purchasable });
  }
  addIngredientHandler = type => {
    const { ingredients, totalPrice } = this.state;
    const updatedIngredients = { ...ingredients };
    const newPrice = totalPrice + INGREDIENT_PRICES[type];
    updatedIngredients[type] = ingredients[type] + 1;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const { ingredients, totalPrice } = this.state;
    if (ingredients[type] <= 0) return;
    const updatedIngredients = { ...ingredients };
    const newPrice = totalPrice - INGREDIENT_PRICES[type];
    updatedIngredients[type] = ingredients[type] + -1;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    console.log('You continue');
  };

  render() {
    const { ingredients, purchasable } = this.state;
    const disabledInfo = { ...ingredients };

    Object.keys(disabledInfo).map(key => {
      disabledInfo[key] = disabledInfo[key] <= 0;
      return key;
    });

    return (
      <AuxHoc>
        <Modal
          show={this.state.purchasing}
          closeModal={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseAccept={this.purchaseContinueHandler}
            purchaseCanceled={this.purchaseCancelHandler}
          />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={purchasable}
          ordered={this.purchaseHandler}
        />
      </AuxHoc>
    );
  }
}
export default BurgerBuilder;
