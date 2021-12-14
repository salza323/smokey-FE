import React from 'react';
import { useLocation } from 'react-router';

import Ingredients from './Ingredients';
import Steps from './Steps';

function RecipeDetails() {
  const location = useLocation();

  const { singleRecipe } = location.state;
  const ingredients = singleRecipe.recipeIngredients;
  const steps = singleRecipe.recipeSteps;

  return (
    <div>
      <h1>{singleRecipe.recipe_name}</h1>
      <h2>Recipe Published By: {singleRecipe.chef}</h2>
      <h3>Ingredients</h3>

      {ingredients.map((singleIngredient, idx) => (
        <Ingredients key={idx} singleIngredient={singleIngredient} />
      ))}
      <h3>Steps</h3>
      {steps.map((singleStep, idx) => (
        <Steps key={idx} singleStep={singleStep} />
      ))}
      <h1>Likes: {singleRecipe.likes}</h1>
    </div>
  );
}

export default RecipeDetails;
