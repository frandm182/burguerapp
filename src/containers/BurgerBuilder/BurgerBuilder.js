import React, { Component } from 'react';

import AuxHoc from '../../hoc/AuxHoc';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    const { ingredients } = this.state;
    return (
      <AuxHoc>
        <Burger ingredients={ingredients} />
        <BurgerControls />
      </AuxHoc>
    );
  }
}
export default BurgerBuilder;
