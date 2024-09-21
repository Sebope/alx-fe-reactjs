// src/App.jsx
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <input type="text" placeholder="Search GitHub Users..." />
      <div className="results">
        {/* Search results will be displayed here */}
      </div>
    </div>
  );
};

export default App;
