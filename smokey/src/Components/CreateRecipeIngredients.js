import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function CreateRecipeIngredients(props) {
  const { ingredients, setIngredients } = props;

  const ingredientChangeHandler = (e, ingredient) => {
    e.persist();
    ingredient[e.target.name] = e.target.value;
    console.log(ingredient);
  };

  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      {
        ingredient_name: '',
        ingredient_quantity: '',
      },
    ]);
  };

  return (
    <div>
      <h2>Ingredients</h2>
      {ingredients &&
        ingredients.map((ingredient, index) => {
          return (
            <div key={index}>
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
        })}

      <Button onClick={addIngredient}>+ Add Ingredient</Button>
    </div>
  );
}

export default CreateRecipeIngredients;
