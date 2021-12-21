import axios from 'axios';

const RecipeApi = {
  getRecipeById: async ({ id }) => {
    const response = await axios.get(
      `http://localhost:8001/api/recipes/retrieve-recipe/${id}`
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
};

export default RecipeApi;
