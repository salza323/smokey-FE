import axios from 'axios';

const RecipeApi = {
  getRecipeById: async ({ id }) => {
    const response = await axios.get(
      `http://localhost:8001/api/recipes/retrieve-recipe/${id}`
    );
    console.log({ response });

    return response.data;
  },

  deleteRecipe: async ({ id }) => {
    const response = await axios.delete(
      `http://localhost:8001/api/recipes/${id}`
    );

    return response.data;
  },
};

export default RecipeApi;
