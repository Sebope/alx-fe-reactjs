// src/components/RecipeList.jsx
import React from 'react';
import useRecipeStore from '../recipeStore';

const RecipeList = (ReactDOM) => {
  const recipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {recipes.length === 0 ? (
        <p><Link></Link></p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
