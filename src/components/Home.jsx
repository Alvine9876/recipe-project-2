import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="h-screen bg-cover bg-center bg-[url(https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=)] flex flex-col items-center ">
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