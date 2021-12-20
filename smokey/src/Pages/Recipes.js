import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';

import RecipePreviewCard from '../Components/RecipePreviewCard';
import { Navigate } from 'react-router';

function Recipes() {
  const [recipeData, setRecipeData] = useState([]);
  //   const [sortingDropdown, setSortingDropdown] = useState('Recent');
  const [displayFormat, setDisplayFormat] = useState('All');

  //   const sortingDropdownOnChange = (event) => {
  //     setSortingDropdown(event.target.value);

  //     if (event.target.value === 'Recent') {
  //       props.fetchPostCommentsByRecent(postID);
  //     } else {
  //       props.fetchPostCommentsByPopular(postID);
  //     }
  //   };

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

  // <div className='filter'>
  //   <label htmlFor='sort'>SORT</label>
  //   <select
  //     name='sort'
  //     value={sortingDropdown}
  //     onChange={sortingDropdownOnChange}
  //   >
  //     <option value='Recent'>Recent</option>
  //     <option value='Popular'>Popular</option>
  //   </select>
  // </div>;

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
