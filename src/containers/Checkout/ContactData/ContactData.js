/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';

import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHandler = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
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
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };
  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your Name..."
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Your Email..."
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Street..."
        />
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Postal Code..."
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

ContactData.propTypes = {
  ingredients: PropTypes.shape({}),
  price: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default ContactData;
