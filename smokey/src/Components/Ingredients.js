import React from 'react';

function Ingredients(singleIngredient) {
  console.log(singleIngredient);
  return (
    <div>
      <p>{singleIngredient.singleIngredient.ingredient_name}</p>
      <p>{singleIngredient.singleIngredient.ingredient_quantity}</p>
    </div>
  );
}

export default Ingredients;
