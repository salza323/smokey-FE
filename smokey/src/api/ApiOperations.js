import axios from 'axios';

// TODO add endpoint
const fetchRecipes = () => {
  return axios.get('http://localhost:8001/api/recipes');
};

export default fetchRecipes;
