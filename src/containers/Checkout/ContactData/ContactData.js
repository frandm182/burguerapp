/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
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
        <Input
          inputType="input"
          type="text"
          name="name"
          placeholder="Your Name..."
        />
        <Input
          inputType="input"
          type="email"
          name="email"
          placeholder="Your Email..."
        />
        <Input
          inputType="input"
          type="text"
          name="street"
          placeholder="Street..."
        />
        <Input
          inputType="input"
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
