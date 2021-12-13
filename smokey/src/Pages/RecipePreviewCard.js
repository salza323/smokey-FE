import React from 'react';

function RecipePreviewCard(singleRecipe) {
  return (
    <div className='preview-card'>
      <p>Recipe Name: {singleRecipe.singleRecipe.recipe_name}</p>
      <p>Recipe Creator: {singleRecipe.singleRecipe.chef}</p>
      <p>Likes: {singleRecipe.singleRecipe.likes}</p>
    </div>
  );
}

export default RecipePreviewCard;
