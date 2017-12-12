/* eslint-disable guard-for-in, no-restricted-syntax, prefer-const, no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      chees: 1,
      bacon: 1
    }
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.chargeIngredients(ingredients);
  }

  chargeIngredients = ingredients => this.setState({ ingredients });

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };
  render() {
    const { ingredients } = this.state;
    return (
      <div>
        <CheckoutSummary
          ingredients={ingredients}
          onCheckoutCancelled={this.checkoutCancelledHandler}
          onCheckoutContinued={this.checkoutContinuedHandler}
        />
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func,
    goBack: PropTypes.func
  }),
  location: PropTypes.shape({
    search: PropTypes.string
  })
};

export default Checkout;
