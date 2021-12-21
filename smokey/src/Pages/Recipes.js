import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import RecipeApi from '..//api/RecipeApi';
import RecipePreviewCard from '../Components/RecipePreviewCard';

function Recipes() {
  const [recipeData, setRecipeData] = useState([]);
  const [displayFormat, setDisplayFormat] = useState('All');

  const navigate = useNavigate();

  const selectDisplayFormat = (e) => {
    setDisplayFormat(e.target.value);

    if (e.target.value === 'All') {
      getAllRecipesHandler();
    } else {
      getAllRecipesByLikesHandler();
    }
  };

  const getAllRecipesHandler = async () => {
    const data = await RecipeApi.getAllRecipes();
    setRecipeData(data.allRecipes);
  };

  const getAllRecipesByLikesHandler = async () => {
    const data = await RecipeApi.getAllRecipesByLikes();
    setRecipeData(data.allRecipes);
  };

  // Will initially load by id, then can be selected to sort by likes
  useEffect(() => {
    getAllRecipesHandler();
  }, []);

  const goToCreateARecipe = (e) => {
    e.preventDefault();
    navigate('/create-recipe');
  };

  return (
    <div className='recipe-data'>
      <div>
        <div className='filter'>
          <label htmlFor='sort'>SORT</label>
          <select
            name='sort'
            value={displayFormat}
            onChange={selectDisplayFormat}
          >
            <option value='All'>All</option>
            <option value='Most Popular'>Most Popular</option>
          </select>
        </div>
        <p>All The Recipes</p>
        <Button onClick={goToCreateARecipe}>Post Your Own Recipe!</Button>
        {recipeData &&
          recipeData.map((singleRecipe, idx) => (
            <RecipePreviewCard key={idx} singleRecipe={singleRecipe} />
          ))}
      </div>
    </div>
  );
}

export default Recipes;
