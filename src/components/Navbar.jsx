import { Link } from 'react-router-dom'

function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="bg-pink-500">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold text-primary-500">Recipe Book</Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/recipes" className="text-gray-700 hover:text-primary-500 transition">Recipes</Link>
            <Link to="/recipes/new" className="text-gray-700 hover:text-primary-500 transition">Add Recipe</Link>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
