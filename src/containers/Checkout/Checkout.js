/* eslint-disable guard-for-in, no-restricted-syntax, prefer-const, no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import ContactData from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  };
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        [, price] = param;
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.chargeIngredients(ingredients, price);
  }

  chargeIngredients = (ingredients, price) =>
    this.setState({ ingredients, price });

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
        <Route
          path={`${this.props.match.path}/contact-data`}
          render={props => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.price}
              {...props}
            />
          )}
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
  }),
  match: PropTypes.shape({
    path: PropTypes.string
  })
};

export default Checkout;
