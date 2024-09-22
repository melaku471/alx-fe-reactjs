// src/services/githubService.js

import axios from 'axios';

const API_URL = 'https://api.github.com/users/';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found');
    } else {
      throw new Error('Something went wrong');
    }
  }
};

