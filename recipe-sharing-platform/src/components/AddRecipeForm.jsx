import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (ingredients.split(',').length < 2) newErrors.ingredients = 'Please include at least two ingredients';
    if (!steps.trim()) newErrors.steps = 'Preparation steps are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // If validation passes, log form data and reset the form
      console.log({
        title,
        ingredients: ingredients.split(','),
        steps,
      });

      // Reset form and errors
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    }
  };

  return (
    <div className="max-w-xl mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        {errors.title && <p className="text-red-500 mb-4">{errors.title}</p>}
        {errors.ingredients && <p className="text-red-500 mb-4">{errors.ingredients}</p>}
        {errors.steps && <p className="text-red-500 mb-4">{errors.steps}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter recipe title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="ingredients">
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter ingredients, separated by commas"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="steps">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 ${errors.steps ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter the steps to prepare the recipe"
            rows="6"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
