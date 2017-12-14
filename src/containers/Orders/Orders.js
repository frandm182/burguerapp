/* eslint-disable react/no-unused-state, no-restricted-syntax, prefer-const, guard-for-in */
import React, { Component } from 'react';

import Order from '../../components/Order/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };
  componentDidMount() {
    axios
      .get('/orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div>
        {this.state.orders.map(({ id, ingredients, price }) => (
          <Order key={id} ingredients={ingredients} price={price} />
        ))}
      </div>
    );
  }
}

Orders.propTypes = {};

export default withErrorHandler(Orders, axios);
