import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import RecipeDetail from './components/RecipeDetail';
import Home from './components/Home';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const mockRecipes = [
          {
            id: 1,
            title: 'Sample Recipe',
            description: 'This is a sample recipe',
            ingredients: ['water', 'flour'],
            instructions: ['Boil water', 'Add flour while stiring'],
            category: 'Dinner',
            image: 'https://media.gettyimages.com/id/1138467989/photo/ugali-polentan-cuisine-tanzania.jpg?s=612x612&w=gi&k=20&c=vU7tEOVa1lyUol2C5fPNanVrAaNVdwpF1T3Qtcd1DCI=',
            cookingTime: 30,
            servings: 4,
            rating: 4.5,
          },
        ];
        setRecipes(mockRecipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    fetchRecipes();
  }, []);

  const addRecipe = async (newRecipe) => {
    try {
      const mockResponse = {
        data: {
          ...newRecipe,
          id: Math.max(0, ...recipes.map((r) => r.id)) + 1,
          rating: 0,
        },
      };
      setRecipes([...recipes, mockResponse.data]);
      return true;
    } catch (error) {
      console.error('Error adding recipe:', error);
      return false;
    }
  };

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<RecipeList recipes={filteredRecipes} />} />
            <Route path="/recipes/new" element={<RecipeForm addRecipe={addRecipe} />} />
            <Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
