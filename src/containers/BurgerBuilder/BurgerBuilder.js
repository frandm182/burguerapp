import React, { Component } from 'react';

import AuxHoc from '../../hoc/AuxHoc/AuxHoc';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

import axios from '../../axios-orders';

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
    purchasing: false,
    loading: false
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
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Fran',
        address: {
          street: '4545',
          country: 'Spain'
        }
      },
      deliveryMethod: 'fastest'
    };
    axios
      .post('/orders.json', order)
      .then(() => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(() => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    const { ingredients, purchasable, loading } = this.state;
    const disabledInfo = { ...ingredients };

    Object.keys(disabledInfo).map(key => {
      disabledInfo[key] = disabledInfo[key] <= 0;
      return key;
    });

    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        purchaseContinued={this.purchaseContinueHandler}
        purchaseCanceled={this.purchaseCancelHandler}
        price={this.state.totalPrice}
      />
    );
    if (loading) {
      orderSummary = <Spinner />;
    }

    return (
      <AuxHoc>
        <Modal
          show={this.state.purchasing}
          closeModal={this.purchaseCancelHandler}
        >
          {orderSummary}
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
