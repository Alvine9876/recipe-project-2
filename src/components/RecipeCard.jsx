function RecipeCard({ recipe }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="h-48 overflow-hidden">
          <img 
            src={recipe.image || '/placeholder-food.jpg'} 
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{recipe.title}</h3>
          <div className="flex items-center justify-between">
            <span className="inline-block bg-secondary-100 text-secondary-800 text-xs px-2 py-1 rounded-full">
              {recipe.category}
            </span>
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="text-gray-600 ml-1">{recipe.rating || 'No ratings'}</span>
            </div>
          </div>
          <p className="text-gray-600 mt-3 line-clamp-2">{recipe.description}</p>
        </div>
      </div>
    )
  }

  export default RecipeCard