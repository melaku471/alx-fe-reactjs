import axios from 'axios'; // Ensure Axios is properly imported

// Function to fetch GitHub user data
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Return the user data
  } catch (error) {
    throw new Error('User not found'); // Handle any API errors
  }
};
