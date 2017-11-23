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
  price
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
  </div>
);

buildControls.propTypes = {
  ingredientAdded: PropTypes.func,
  ingredientRemoved: PropTypes.func,
  price: PropTypes.number,
  disabled: PropTypes.shape({})
};

export default buildControls;
