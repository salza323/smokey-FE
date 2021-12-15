import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const initialRecipeValues = {
  recipe_name: '',
  creator_id: window.localStorage.getItem('userId'),
  ingredients: [],
  steps: [],
};

function CreateRecipe(props) {
  const [newRecipe, setNewrecipe] = useState(initialRecipeValues);
  console.log(newRecipe);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    e.persist();
    setNewrecipe({
      ...newRecipe,
      [e.target.name]: e.target.value,
    });
    console.log(newRecipe);
  };

  const stepChange = (e) => {
    e.persist();
    setNewRecipe({
      ...newRecipe.ingredients,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(newRecipe);
    axios
      .post('localhost:8001/api/recipes/create-recipe', newRecipe)
      .then(function () {
        navigate('/');
        console.log('Added a new Recipe!');
      })
      .catch((err) => console.log(err));
    setNewrecipe(initialRecipeValues);
  };

  return (
    <div>
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
          <Button onClick={submitHandler} variant='outlined'>
            Publish Recipe!
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default CreateRecipe;
