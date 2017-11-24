import React from 'react';
import PropTypes from 'prop-types';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];
const buildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  price,
  purchasable,
  ordered
}) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => ingredientAdded(ctrl.type)}
        removed={() => ingredientRemoved(ctrl.type)}
        disabled={disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!purchasable}
      onClick={ordered}
    >
      Order now!
    </button>
  </div>
);

buildControls.propTypes = {
  ingredientAdded: PropTypes.func,
  ingredientRemoved: PropTypes.func,
  price: PropTypes.number,
  disabled: PropTypes.shape({}),
  purchasable: PropTypes.bool,
  ordered: PropTypes.func
};

export default buildControls;
