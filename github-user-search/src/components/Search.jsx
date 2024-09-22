import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Ensure correct import path

const Search = () => {
  const [username, setUsername] = useState(''); // State for input value
  const [userData, setUserData] = useState(null); // State for user data
  const [loading, setLoading] = useState(false); // State for loading
  const [error, setError] = useState(null); // State for error handling

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(null); // Reset error
    setUserData(null); // Reset user data for new search

    try {
      const data = await fetchUserData(username); // Fetch user data
      setUserData(data); // Set user data when successful
    } catch (err) {
      setError('Looks like we can’t find the user'); // Set error message if user is not found
    } finally {
      setLoading(false); // Stop loading after API call completes
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Handle input change
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>} {/* Display while loading */}
      {error && <p>{error}</p>} {/* Display error message when user not found */}
      {userData && ( // Display user data if available
        <div>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
          <h2>{userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
