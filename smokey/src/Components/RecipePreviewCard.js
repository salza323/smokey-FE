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
          margin: '20px',
          padding: '20px',
        }}
        variant='outlined'
      >
        <CardContent className='CardContent'>
          <Typography sx={{ fontSize: 35 }} color='text.secondary' gutterBottom>
            {singleRecipe.recipe_name}
          </Typography>
          <Typography sx={{ mb: 2.5 }} color='text.secondary'>
            By: {singleRecipe.chef}
          </Typography>
          <hr></hr>
          <div className='CardBottomContainer'>
            <Link to={`/recipes/${singleRecipe.recipe_id}`}>
              <Button size='small'>
                <p>Recipe Details</p>
              </Button>
            </Link>
            <Button onClick={addLike}>
              <IoMdFlame /> {likes} <br />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default RecipePreviewCard;
