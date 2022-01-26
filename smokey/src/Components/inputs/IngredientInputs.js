import React from 'react';
import IngredientInput from './IngredientInput';
import Button from '@mui/material/Button';

function IngredientInputs(props) {
  return (
    <React.Fragment>
      <h2>Ingredients</h2>
      {props.ingredients?.map?.((ingredient, index) => {
        return <IngredientInput ingredient={ingredient} key={index} />;
      })}
      <Button onClick={props.addIngredient}>+ Add Ingredient</Button>
    </React.Fragment>
  );
}

export default IngredientInputs;
