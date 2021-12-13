import React, { useState, useEffect } from 'react';
import axios from 'axios';

import fetchRecipes from '../api/ApiOperations';

import RecipePreviewCard from './RecipePreviewCard';

function Recipes() {
  const [recipeData, setRecipeData] = useState([]);
  console.log(recipeData);

  //   useEffect(() => {
  //     setRecipeData(fetchRecipes());
  //     console.log(recipeData);
  //   }, []);

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
    console.log(recipeData);
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
