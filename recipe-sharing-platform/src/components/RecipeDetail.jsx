import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = data.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div className="container mx-auto p-4">Recipe not found!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-48 object-cover rounded-t-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
