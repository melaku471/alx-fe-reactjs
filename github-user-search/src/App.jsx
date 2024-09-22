import React, { useState } from 'react';
import SearchBar from './components/Search';
import UserCard from './components/UserCard';
import { searchGitHubUsers } from './services/githubApiService';


const App = () => {
  const [users, setUsers] = useState([]);

  // Function to handle search
  const handleSearch = async (username) => {
    const data = await searchGitHubUsers(username);
    setUsers(data.items); // Assuming `items` is the array of users from the GitHub API response
  };

  return (
    <div className="App">
      <header>
        <h1>GitHub User Search</h1>
        <SearchBar onSearch={handleSearch} />
      </header>

      <main>
        {users.length > 0 ? (
          users.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p>No users found. Try a new search.</p>
        )}
      </main>
    </div>
  );
};

export default App;
