import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import RecipesApi from '../api/RecipeApi';

function RecipePreviewCard(props) {
  const { singleRecipe } = props;
  const [likes, setLikes] = useState(0);

  const addLike = async () => {
    const data = await RecipesApi.addLikeToRecipe(singleRecipe.recipe_id);
    console.log(data);
    setLikes(likes + 1);
  };

  useEffect(() => {
    setLikes(singleRecipe.likes);
  }, [singleRecipe]);

  return (
    <Card sx={{ width: 275, margin: 'auto' }} variant='outlined'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Recipe Name: {singleRecipe.recipe_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Recipe Creator: {singleRecipe.chef}
        </Typography>
        <Typography variant='outlined'>
          Likes: {likes} <br />
        </Typography>
        <CardActions>
          <Link to={`/recipes/${singleRecipe.recipe_id}`}>
            <Button size='small'>
              <p>Recipe Details</p>
            </Button>
          </Link>
        </CardActions>
        <Button onClick={addLike}>Like</Button>
      </CardContent>
    </Card>
  );
}

export default RecipePreviewCard;
