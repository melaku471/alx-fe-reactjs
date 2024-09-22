// src/services/githubService.js

import axios from 'axios'; // Ensure Axios is imported

// Function to fetch GitHub user data
export const fetchUserData = async (username) => {
    try {
        // Making an API call to GitHub's user endpoint
        const response = await axios.get(`https://api.github.com/users/${username}`);
        // Return the user data received from GitHub API
        return response.data;
    } catch (error) {
        throw new Error('User not found'); // Handle errors appropriately
    }
};
