import React from 'react';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';

const App = () => {
  return (
    <div>
      <header>
        <h1>Recipe Sharing App</h1>
        {/* Add navigation or links if needed */}
      </header>
      <main>
        <FavoritesList />
        <RecommendationsList />
        {/* Include other components like RecipeList, RecipeDetail, etc. */}
      </main>
    </div>
  );
};

export default App;
