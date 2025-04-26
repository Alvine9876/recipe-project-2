import { Link } from 'react-router-dom'
import RecipeCard from './RecipeCard'

function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl text-gray-600">No recipes found. Add a new recipe to get started!</h3>
        <Link 
          to="/recipes/new" 
          className="mt-4 inline-block bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition"
        >
          Add Recipe
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RecipeList