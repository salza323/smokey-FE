import * as React from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function RecipePreviewCard(singleRecipe) {
  const addLike = (e) => {
    axios
      .put(
        `http://localhost:8001/api/recipes/add-like/${singleRecipe.singleRecipe.recipe_id}`
      )
      .catch((err) => console.log(err));
  };

  return (
    <Card sx={{ width: 275, margin: 'auto' }} variant='outlined'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Recipe Name: {singleRecipe.singleRecipe.recipe_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Recipe Creator: {singleRecipe.singleRecipe.chef}
        </Typography>
        <Typography variant='outlined'>
          Likes: {singleRecipe.singleRecipe.likes} <br />
        </Typography>
        <CardActions>
          <Link to={`/recipes/${singleRecipe.singleRecipe.recipe_id}`}>
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
