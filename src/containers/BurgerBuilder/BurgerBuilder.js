import React, { Component } from 'react';
import AuxHoc from '../../hoc/AuxHoc';

class BurgerBuilder extends Component {
  render() {
    return (
      <AuxHoc>
        <div>Burguer</div>
        <div>Build</div>
      </AuxHoc>
    );
  }
}
export default BurgerBuilder;
