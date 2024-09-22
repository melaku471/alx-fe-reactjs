import axios from 'axios';

// Create a function to search GitHub users
const searchGitHubUsers = async (username) => {
  const apiKey = process.env.REACT_APP_GITHUB_API_KEY;
  const url = `https://api.github.com/search/users?q=${username}`;
  
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${apiKey}`,  // Use the API key here
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error);
    return null;
  }
};

export { searchGitHubUsers };
