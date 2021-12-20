import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import UpdateRecipeIngredients from './UpdateRecipeIngredients';
import UpdateRecipeSteps from './UpdateRecipeSteps';

function UpdateRecipe() {
  const location = useLocation();
  const navigate = useNavigate();

  const [updatedRecipe, setUpdatedRecipe] = useState(location.state);
  const [updatedIngredients, setUpdatedIngredients] = useState(
    updatedRecipe.recipeIngredients
  );
  const [updatedSteps, setUpdatedSteps] = useState(updatedRecipe.recipeSteps);

  console.log(updatedIngredients);

  const changeHandler = (e) => {
    e.persist();
    setUpdatedRecipe({
      ...updatedRecipe,
      [e.target.name]: e.target.value,
    });
    console.log(updatedRecipe);
  };

  useEffect(() => {
    console.log(updatedRecipe);
  }, [updatedRecipe]);

  const submitHandler = (e) => {
    e.preventDefault();
    // axios
    //   .post(
    //     `http://localhost:8001/api/recipes/update-recipe/${updatedRecipe.recipe_id}`,
    //     updatedRecipe
    //   )
    //   .then(function () {
    //     navigate('/');
    //     console.log('Updated The Recipe!');
    //   })
    //   .catch((err) => console.log(err));
    console.log(updatedIngredients);
    console.log(updatedRecipe);
  };

  return (
    <div>
      <h1> Make Changes To Your Recipe</h1>
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
            defaultValue={updatedRecipe.recipe_name}
            name='recipe_name'
            // value={updatedRecipe.recipe_name}
            onChange={changeHandler}
          />
          <UpdateRecipeIngredients
            updatedIngredients={updatedIngredients}
            setUpdatedIngredients={setUpdatedIngredients}
          />
          <UpdateRecipeSteps
            updatedSteps={updatedSteps}
            setUpdatedSteps={setUpdatedSteps}
          />
          <Button onClick={submitHandler} variant='outlined'>
            Update Recipe!
          </Button>
        </div>
      </Box>{' '}
    </div>
  );
}

export default UpdateRecipe;
