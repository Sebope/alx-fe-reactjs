function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <SearchBar />
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

const RecipeDetailsWrapper = () => {
  const { recipeId } = useParams();
  return <RecipeDetails recipeId={parseInt(recipeId, 10)} />;
};

export default App;