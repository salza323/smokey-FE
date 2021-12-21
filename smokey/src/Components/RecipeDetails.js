import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import Ingredients from './Ingredients';
import Step from './Step';
import RecipeApi from '../api/RecipeApi';

function RecipeDetails() {
  let { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const navigate = useNavigate();

  const deleteHandler = async (e) => {
    e.preventDefault();
    const data = await RecipeApi.deleteRecipe({ id });
    console.log(data);
    navigate('/');
  };

  const goBack = (e) => {
    e.preventDefault();
    navigate('/');
  };

  useEffect(() => {
    (async () => {
      const data = await RecipeApi.getRecipeById({ id });
      console.log(data);
      setRecipe(data);
    })();
  }, [id]);

  return (
    <>
      <Button onClick={goBack}>Back to all Recipes</Button>
      <div>
        <h1>{recipe?.recipe_name}</h1>
        <h2>Recipe Published By: {recipe?.username}</h2>
        <h3>Ingredients</h3>

        {recipe?.ingredients?.map?.((singleIngredient, idx) => (
          <Ingredients key={idx} singleIngredient={singleIngredient} />
        ))}
        <h3>Steps</h3>
        {recipe?.steps?.map?.((singleStep, idx) => (
          <Step key={idx} singleStep={singleStep} />
        ))}
        <h1>Likes: {recipe?.likes}</h1>
        <Link to={`/recipes/${recipe?.recipe_id}/edit`} state={recipe}>
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
