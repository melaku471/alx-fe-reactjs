import React, { useState } from 'react';
import githubService from '../githubService'; // Ensure correct path

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [users, setUsers] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const result = await githubService.searchUsers(username, location, minRepos);
            if (result.items) {
                setUsers(result.items); // Populate users with API result
            } else {
                setUsers([]); // Reset users to empty if no result
            }
        } catch (err) {
            setError('Error fetching users.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSearch} className="flex flex-col gap-4">
                {/* Form Fields */}
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        placeholder="Search by username"
                    />
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        placeholder="Search by location"
                    />
                </div>
                <div>
                    <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
                    <input
                        type="number"
                        id="minRepos"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        placeholder="Minimum number of repositories"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {/* Ensure users is an array and map over it safely */}
            {Array.isArray(users) && users.length > 0 ? (
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Results:</h2>
                    <ul className="divide-y divide-gray-200">
                        {users.map((user) => (
                            <li key={user.id} className="py-4 flex">
                                <img className="h-10 w-10 rounded-full" src={user.avatar_url} alt="" />
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">{user.login}</p>
                                    <p className="text-sm text-gray-500">{user.location || 'Location not available'}</p>
                                    <p className="text-sm text-gray-500">{user.public_repos} repositories</p>
                                    <a href={user.html_url} className="text-blue-500">View Profile</a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
};

export default Search;
