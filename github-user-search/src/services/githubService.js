import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

const searchUsers = async (username, location, minRepos) => {
    let query = '';

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>${minRepos}`;

    const url = `${BASE_URL}?q=${encodeURIComponent(query)}`;

    const response = await axios.get(url);
    return response.data;
};

export default { searchUsers };
