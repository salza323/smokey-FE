import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import { IoMdFlame, IoMdAdd } from 'react-icons/io';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import '../Styles/RecipePreviewCard.css';

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
    <div className='CardContainer'>
      <Card
        sx={{
          width: 275,
          margin: 'auto',
          padding: '5px',
        }}
        variant='outlined'
      >
        <CardContent className='CardContent'>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            Recipe Name: {singleRecipe.recipe_name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            Recipe Creator: {singleRecipe.chef}
          </Typography>

          <Typography>
            <Link to={`/recipes/${singleRecipe.recipe_id}`}>
              <Button size='small'>
                <p>Recipe Details</p>
              </Button>
            </Link>
          </Typography>
          <div className='LikesContainer'>
            <Button onClick={addLike}>
              <IoMdAdd />
            </Button>

            <Typography variant='outlined'>
              <IoMdFlame /> {likes} <br />
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default RecipePreviewCard;
