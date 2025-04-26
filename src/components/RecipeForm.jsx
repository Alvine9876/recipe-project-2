import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function RecipeForm({ addRecipe }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: [''],
    instructions: [''],
    category: '',
    image: '',
    cookingTime: 30,
    servings: 2
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleArrayChange = (e, field, index) => {
    const newArray = [...formData[field]]
    newArray[index] = e.target.value
    setFormData({ ...formData, [field]: newArray })
  }

  const addArrayField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ''] })
  }

  const removeArrayField = (field, index) => {
    const newArray = formData[field].filter((_, i) => i !== index)
    setFormData({ ...formData, [field]: newArray })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await addRecipe({
      ...formData,
      ingredients: formData.ingredients.filter(i => i.trim() !== ''),
      instructions: formData.instructions.filter(i => i.trim() !== '')
    })
    if (success) {
      navigate('/recipes')
    } else {
      alert('Failed to save the recipe.')
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Recipe</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            rows="3"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Ingredients</label>
          {formData.ingredients.map((ingredient, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleArrayChange(e, 'ingredients', index)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="button"
                onClick={() => removeArrayField('ingredients', index)}
                className="bg-red-500 text-white px-3 rounded-r-lg hover:bg-red-600 transition"
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField('ingredients')}
            className="mt-2 bg-gray-200 text-gray-700 px-4 py-1 rounded-lg hover:bg-gray-300 transition"
          >
            Add Ingredient
          </button>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Instructions</label>
          {formData.instructions.map((instruction, index) => (
            <div key={index} className="flex mb-2">
              <textarea
                value={instruction}
                onChange={(e) => handleArrayChange(e, 'instructions', index)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                rows="2"
              />
              <button
                type="button"
                onClick={() => removeArrayField('instructions', index)}
                className="bg-red-500 text-white px-3 rounded-r-lg hover:bg-red-600 transition"
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField('instructions')}
            className="mt-2 bg-gray-200 text-gray-700 px-4 py-1 rounded-lg hover:bg-gray-300 transition"
          >
            Add Instruction Step
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Cooking Time (minutes)</label>
            <input
              type="number"
              name="cookingTime"
              value={formData.cookingTime}
              onChange={handleChange}
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Servings</label>
            <input
              type="number"
              name="servings"
              value={formData.servings}
              onChange={handleChange}
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/recipes')}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition"
          >
            Save Recipe
          </button>
        </div>
      </form>
    </div>
  )
}

export default RecipeForm