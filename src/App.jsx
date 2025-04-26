import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios' // Add this import

import Navbar from './components/Navbar'
import RecipeList from './components/RecipeList'
import RecipeForm from './components/RecipeForm'
import RecipeDetail from './components/RecipeDetail'
import Home from './components/Home'

function App() {
  const [recipes, setRecipes] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // For development, you might want to use mock data first
        // Remove this when your backend is ready
        const mockRecipes = [
          {
            id: 1,
            title: "Sample Recipe",
            description: "This is a sample recipe",
            ingredients: ["Ingredient 1", "Ingredient 2"],
            instructions: ["Step 1", "Step 2"],
            category: "Dinner",
            image: "",
            cookingTime: 30,
            servings: 4,
            rating: 4.5
          }
        ]
        setRecipes(mockRecipes)
        // const response = await axios.get('/api/recipes')
        // setRecipes(response.data)
      } catch (error) {
        console.error('Error fetching recipes:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchRecipes()
  }, [])

  const addRecipe = async (newRecipe) => {
    try {
      // For development, mock the response
      const mockResponse = {
        data: {
          ...newRecipe,
          id: Math.max(0, ...recipes.map(r => r.id)) + 1,
          rating: 0
        }
      }
      setRecipes([...recipes, mockResponse.data])
      return true
      // const response = await axios.post('/api/recipes', newRecipe)
      // setRecipes([...recipes, response.data])
      // return true
    } catch (error) {
      console.error('Error adding recipe:', error)
      return false
    }
  }

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

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
  )
}

export default App