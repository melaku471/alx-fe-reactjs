// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Ensure correct import path

const Search = () => {
  const [username, setUsername] = useState(''); // State to store user input
  const [userData, setUserData] = useState(null); // State to store GitHub user data
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(null); // State to store error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when the form is submitted
    setError(null); // Reset any previous errors

    try {
      const data = await fetchUserData(username); // Make API call to GitHub
      setUserData(data); // If successful, set user data
    } catch (err) {
      setError('Looks like we can’t find the user'); // Set error message if API call fails
    } finally {
      setLoading(false); // Set loading state to false after API call is done
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state on input change
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>} {/* Display loading message while fetching */}
      {error && <p>{error}</p>} {/* Display error message if user not found */}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} /> {/* Display user's avatar */}
          <h2>{userData.login}</h2> {/* Display user's GitHub username */}
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a> {/* Link to user's GitHub profile */}
        </div>
      )}
    </div>
  );
};

export default Search;
