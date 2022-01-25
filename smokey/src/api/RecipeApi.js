import axios from 'axios';

import axiosWithAuth from './AxiosAuthorization';

const url = 'http://localhost:8001';

const RecipeApi = {
  getRecipeById: async ({ id }) => {
    const response = await axios.get(
      `${url}/api/recipes/retrieve-recipe/${id}`
    );
    return response.data;
  },

  deleteRecipe: async ({ id }) => {
    const response = await axios.delete(
      `http://localhost:8001/api/recipes/${id}`
    );
    return response.data;
  },

  updateRecipe: async (id, recipe) => {
    const response = await axios.put(
      `http://localhost:8001/api/recipes/update-recipe/${id}`,
      recipe
    );
    return response.data;
  },

  createRecipe: async (recipe) => {
    const response = await axios.post(
      'http://localhost:8001/api/recipes/create-recipe',
      recipe
    );
    return response.data;
  },

  addLikeToRecipe: async (id) => {
    const response = await axios.put(
      `http://localhost:8001/api/recipes/add-like/${id}`
    );
    return response.data;
  },

  getAllRecipes: async () => {
    const response = await axios.get(`http://localhost:8001/api/recipes`);
    return response.data;
  },

  getAllRecipesByLikes: async () => {
    const response = await axios.get(
      `http://localhost:8001/api/recipes/by-likes`
    );
    return response.data;
  },
};

export default RecipeApi;
