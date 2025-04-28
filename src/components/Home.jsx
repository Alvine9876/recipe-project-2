import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="h-screen bg-cover bg-center bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9OQtcrVw008g09nazD3hsedG7PT8cYRlNg&s)] flex flex-col items-center ">
      <h1 className="text-4xl font-bold text-violet-500 mb-50">Welcome to Recipe Book</h1>
      <p className="text-xl font-bold text-white mb-30 max-w-2xl mx-auto">
        Discover, save, and share your favorite recipes in one place.
      </p>

      <div className="flex justify-center space-x-4">
        <Link 
          to="/recipes" 
          className="bg-green-500  px-6 border border-primary-500 px-6 py-3 rounded-lg hover:bg-gray-50 transition"
        >
          Browse Recipes
        </Link>
        <Link 
          to="/recipes/new" 
          className="bg-green-500 text-primary-500 border border-primary-500 px-6 py-3 rounded-lg hover:bg-gray-50 transition"
        >
          Add Recipe
        </Link >
      </div>
    </div>
  )
}

export default Home