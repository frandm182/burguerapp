import React, { Component } from 'react';
import AuxHoc from '../../hoc/AuxHoc';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  };

  render() {
    const { ingredients } = this.state;
    return (
      <AuxHoc>
        <Burger ingredients={ingredients} />
        <div>Build</div>
      </AuxHoc>
    );
  }
}
export default BurgerBuilder;
