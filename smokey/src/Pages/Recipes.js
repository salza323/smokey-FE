import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';

import RecipePreviewCard from '../Components/RecipePreviewCard';

function Recipes() {
  const [recipeData, setRecipeData] = useState([]);
  const [displayFormat, setDisplayFormat] = useState('All');

  const selectDisplayFormat = (e) => {
    setDisplayFormat(e.target.value);

    if (e.target.value === 'All') {
      getAllRecipes();
    } else {
      getAllRecipesByLikes();
    }
  };

  const navigate = useNavigate();

  const getAllRecipes = () => {
    axios
      .get(`http://localhost:8001/api/recipes`)
      .then(function (res) {
        setRecipeData(res.data.allRecipes);
      })
      .catch((err) => console.log(err.response));
  };

  const getAllRecipesByLikes = () => {
    axios
      .get(`http://localhost:8001/api/recipes/by-likes`)
      .then(function (res) {
        setRecipeData(res.data.allRecipes);
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    getAllRecipes();
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
        {recipeData.map((singleRecipe, idx) => (
          <RecipePreviewCard key={idx} singleRecipe={singleRecipe} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
