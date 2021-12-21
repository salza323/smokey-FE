import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import RecipeApi from '../../api/RecipeApi';
import IngredientInputs from './IngredientInputs';
import StepInputs from './StepInputs';

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
  const [recipe, setRecipe] = useState(initialRecipeValues);
  let { id } = useParams();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    e.persist();
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  // Will set which function gets called, depending on what props are beign passed in from App
  const submitHandler = (e) => {
    e.preventDefault();
    props.method === 'POST' ? createHandler() : updateHandler();
    console.log(recipe);
  };

  // If 'PUT' method, will send update request to API
  const updateHandler = async () => {
    const data = await RecipeApi.updateRecipe(recipe.recipe_id, recipe);
    // TODO can do something better with this data?
    console.log(data);
    navigate('/');
  };

  // If 'POST' method, will send create request to API
  const createHandler = async () => {
    const data = await RecipeApi.createRecipe(recipe);
    console.log(data);
    navigate('/');
  };

  const addIngredient = () => {
    setRecipe({
      ...recipe,
      ingredients: [
        ...recipe.ingredients,
        {
          ingredient_name: '',
          ingredient_quantity: '',
        },
      ],
    });
  };

  const addStep = () => {
    setRecipe({
      ...recipe,
      steps: [
        ...recipe.steps,
        {
          step_number: 0,
          step_temperature_in_fahrenheit: 0,
          step_instruction: '',
        },
      ],
    });
  };

  useEffect(() => {
    if (id) {
      (async () => {
        const data = await RecipeApi.getRecipeById({ id });
        setRecipe(null);
        setRecipe(data);
      })();
    }
  }, [id]);

  return (
    <div>
      <h1> {props.method === 'POST' ? 'Create' : 'Update'} Your Recipe!</h1>
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
            value={recipe?.recipe_name}
            onChange={changeHandler}
          />
          <IngredientInputs
            ingredients={recipe?.ingredients}
            addIngredient={addIngredient}
          />
          <StepInputs steps={recipe?.steps} addStep={addStep} />
          <Button onClick={submitHandler} variant='outlined'>
            {props.method === 'POST' ? 'Publish' : 'Update'} Recipe!
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default CreateRecipe;
