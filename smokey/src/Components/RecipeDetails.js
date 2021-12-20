import React from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import Ingredients from './Ingredients';
import Step from './Step';
import axios from 'axios';

function RecipeDetails() {
  const location = useLocation();

  const { singleRecipe } = location.state;
  const ingredients = singleRecipe.recipeIngredients;
  const steps = singleRecipe.recipeSteps;

  const navigate = useNavigate();

  const deleteHandler = (e) => {
    e.preventDefault();
    axios
      .delete(
        `http://localhost:8001/api/recipes/delete-recipe/${singleRecipe.recipe_id}`
      )
      .then(function () {
        navigate('/');
        console.log(
          `Recipe with id ${singleRecipe.recipe_id} has been deleted`
        );
      })
      .catch((err) => console.log(err));
  };

  const goBack = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
      <Button onClick={goBack}>Back to all Recipes</Button>
      <div>
        <h1>{singleRecipe.recipe_name}</h1>
        <h2>Recipe Published By: {singleRecipe.chef}</h2>
        <h3>Ingredients</h3>

        {ingredients.map((singleIngredient, idx) => (
          <Ingredients key={idx} singleIngredient={singleIngredient} />
        ))}
        <h3>Steps</h3>
        {steps.map((singleStep, idx) => (
          <Step key={idx} singleStep={singleStep} />
        ))}
        <h1>Likes: {singleRecipe.likes}</h1>
        <Link to='/update-recipe' state={singleRecipe}>
          <Button size='small'>
            <p>Update Recipe</p>
          </Button>
        </Link>
        <Button onClick={deleteHandler}>Delete this Recipe</Button>
      </div>
    </>
  );
}

export default RecipeDetails;
