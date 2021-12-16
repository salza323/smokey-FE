import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Ingredients from './Ingredients';

import CreateRecipeIngredients from './CreateRecipeIngredients';
import CreateRecipeSteps from './CreateRecipeSteps';

const initialSteps = [
  {
    step_number: 0,
    step_temperature_in_fahrenheit: 0,
    step_instruction: '',
  },
];

const initialIngredients = [
  {
    ingredient_name: '',
    ingredient_quantity: '',
  },
];

const initialRecipeValues = {
  recipe_name: '',
  creator_id: window.localStorage.getItem('userId'),
  ingredients: initialIngredients,
  steps: initialSteps,
};
function CreateRecipe(props) {
  const [newRecipe, setNewRecipe] = useState(initialRecipeValues);
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState(newRecipe.ingredients);
  const [steps, setSteps] = useState(newRecipe.steps);
  //   const [newIngredients, setNewIngredients] = useState({ initialIngredients });
  console.log(newRecipe);
  console.log(newRecipe.ingredients);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    e.persist();
    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('newRecipe', recipe);
    console.log('ingredients', ingredients);
    // axios
    //   .post('localhost:8001/api/recipes/create-recipe', newRecipe)
    //   .then(function () {
    //     navigate('/');
    //     console.log('Added a new Recipe!');
    //   })
    //   .catch((err) => console.log(err));
    // setNewRecipe(initialRecipeValues);
    console.log('final obj', newRecipe);
  };

  useEffect(() => {
    console.log('useEffect[ingredients]: ', { ingredients });
  }, [ingredients]);

  return (
    <div>
      <h1> Create A New Recipe</h1>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <div>
          <TextField
            required
            id='recipe_name'
            label='Recipe Name'
            placeholder='Enter A Name For Your Recipe'
            name='recipe_name'
            value={newRecipe.recipe_name}
            onChange={changeHandler}
          />
          <CreateRecipeIngredients
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
          <CreateRecipeSteps steps={steps} setSteps={setSteps} />
          <Button onClick={submitHandler} variant='outlined'>
            Publish Recipe!
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default CreateRecipe;
