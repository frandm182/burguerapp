/* eslint-disable guard-for-in, no-restricted-syntax, prefer-const */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AuxHoc from '../../hoc/AuxHoc/AuxHoc';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    // axios
    //   .get('/ingredients.json')
    //   .then(res => this.setState({ ingredients: res.data }))
    //   .catch(() => {
    //     this.setState({ error: true });
    //   });
  }

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
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        `${encodeURIComponent(i)}=${encodeURIComponent(
          this.state.ingredients[i]
        )}`
      );
    }
    queryParams.push(`price=${this.state.totalPrice}`);
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: `?${queryString}`
    });
  };

  render() {
    const { ingredients, purchasable, loading, error } = this.state;
    const disabledInfo = { ...ingredients };

    Object.keys(disabledInfo).map(key => {
      disabledInfo[key] = disabledInfo[key] <= 0;
      return key;
    });

    let orderSummary = null;
    let burger = error ? <p>Ingredients cant be loaded</p> : <Spinner />;

    if (ingredients) {
      burger = (
        <AuxHoc>
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

      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseContinued={this.purchaseContinueHandler}
          purchaseCanceled={this.purchaseCancelHandler}
          price={this.state.totalPrice}
        />
      );
    }
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
        {burger}
      </AuxHoc>
    );
  }
}
BurgerBuilder.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};
export default withErrorHandler(BurgerBuilder, axios);
