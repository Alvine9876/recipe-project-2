import { useParams, Link } from 'react-router-dom'

function RecipeDetail({ recipes }) {
  const { id } = useParams()
  const recipe = recipes.find(r => r.id === parseInt(id))

  if (!recipe) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl text-gray-600">Recipe not found</h3>
        <Link 
          to="/recipes" 
          className="mt-4 inline-block bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition"
        >
          Back to Recipes
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img 
            src={recipe.image || '/placeholder-food.jpg'} 
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:w-1/2">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{recipe.title}</h2>
              <span className="inline-block mt-2 bg-secondary-100 text-secondary-800 text-sm px-3 py-1 rounded-full">
                {recipe.category}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-500 text-xl">★</span>
              <span className="text-gray-600 ml-1">{recipe.rating || 'No ratings'}</span>
            </div>
          </div>

          <p className="mt-4 text-gray-600">{recipe.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-700">Cooking Time</h4>
              <p>{recipe.cookingTime} minutes</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Servings</h4>
              <p>{recipe.servings}</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Ingredients</h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Instructions</h3>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-primary-500 text-white rounded-full mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail;  