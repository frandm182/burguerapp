/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

import Order from '../../components/Order/Order/Order';

class Orders extends Component {
  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}

Orders.propTypes = {};

export default Orders;
