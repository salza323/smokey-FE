import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
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

  // If 'PUT' method, will send update request to API
  const updateRecipe = () => {
    axios
      .put(
        `http://localhost:8001/api/recipes/update-recipe/${recipe.recipe_id}`,
        recipe
      )
      .then(function () {
        navigate('/');
        console.log('Updated The Recipe!');
        // console.log(ingredients);
      })
      .catch((err) => console.log(err));
  };

  // If 'POST' method, will send create request to API
  const createRecipe = () => {
    axios
      .post('http://localhost:8001/api/recipes/create-recipe', recipe)
      .then(function () {
        navigate('/');
        console.log('Added a new Recipe!');
      })
      .catch((err) => console.log(err));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.method === 'POST' ? createRecipe() : updateRecipe();
    console.log(recipe);
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