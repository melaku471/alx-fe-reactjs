// src/services/githubService.js

import axios from 'axios';

const API_URL = 'https://api.github.com/search/users?q=';

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  try {
    const response = await axios.get(`${API_URL}${query}`);
    return response.data;  // Return the full data object, which includes `items` for user results
  } catch (error) {
    throw new Error('Something went wrong with the search');
  }
};
