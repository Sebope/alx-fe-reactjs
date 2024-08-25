import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // List of all recipes
  favorites: [], // List of favorite recipe IDs
  recommendations: [], // List of recommended recipes
  
  // Add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Generate recommendations based on favorites
  generateRecommendations: () => set(state => {
    // Basic example: Recommend recipes that are not already in favorites
    const recommended = state.recipes.filter(recipe => 
      !state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));
