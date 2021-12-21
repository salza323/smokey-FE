import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function IngredientInput(props) {
  const { ingredient } = props;

  console.log({ ingredient });

  const ingredientChangeHandler = (e, ingredient) => {
    e.persist();
    ingredient[e.target.name] = e.target.value;
  };

  useEffect(() => {
    console.log('useEffect[ingredient]', { ingredient });
  }, [ingredient]);

  return (
    <div key={props.index}>
      <TextField
        required
        id='ingredient_name'
        label='Ingredient Name'
        placeholder='Enter A New Ingredient Name'
        name='ingredient_name'
        defaultValue={ingredient?.ingredient_name}
        onChange={(e) => ingredientChangeHandler(e, ingredient)}
      />
      <TextField
        required
        id='ingredient_quantity'
        label='Ingredient Quantitiy'
        placeholder='Enter Quantity'
        name='ingredient_quantity'
        defaultValue={ingredient?.ingredient_quantity}
        onChange={(e) => ingredientChangeHandler(e, ingredient)}
      />
    </div>
  );
}

export default IngredientInput;
