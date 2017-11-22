import React, { Component } from 'react';
import AuxHoc from '../../hoc/AuxHoc';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <AuxHoc>
        <Burger />
        <div>Build</div>
      </AuxHoc>
    );
  }
}
export default BurgerBuilder;
