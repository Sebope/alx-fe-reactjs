import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; 

const Search = () => {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(username); 
      setUsers(data.items); // Assumes data.items contains the search results
    } catch (err) {
      setError("Looks like we can't find any users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border p-2 rounded-md mr-2"
        />
        <button type="submit" className="border p-2 rounded-md bg-blue-500 text-white hover:bg-blue-400">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {users.length > 0 && (
        <div className="mt-4">
          {users.map(user => (
            <div key={user.id} className="border-b py-2">
              <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full inline" />
              <h2 className="font-semibold">{user.login}</h2>
              <p>Location: {user.location || 'N/A'}</p>
              <p>Repositories: {user.public_repos || 0}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;