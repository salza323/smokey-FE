import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RecipePreviewCard from '../Components/RecipePreviewCard';

function Recipes() {
  const [recipeData, setRecipeData] = useState([]);
  console.log(recipeData);

  const fetchData = () => {
    axios
      .get(`http://localhost:8001/api/recipes`)
      .then(function (res) {
        setRecipeData(res.data.allRecipes);
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='recipe-data'>
      <div>
        <p>Recipe data</p>
        {recipeData.map((singleRecipe, idx) => (
          <RecipePreviewCard key={idx} singleRecipe={singleRecipe} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
