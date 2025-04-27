import axios from "axios";


const API_URL = 'https://spoonacular.com/food-api'; 

export const getRecipes = async () => {
  try {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const addRecipe = async (recipeData) => {
  try {
    const response = await axios.post(`${API_URL}/recipes`, recipeData);
    return response.data;
  } catch (error) {
    console.error('Error adding recipe:', error);
    throw error;
  }
};