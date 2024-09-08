import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function PostsComponent() {
  // Use the useQuery hook to fetch and cache the posts with options
  const { data, isError, error, isLoading, refetch, isFetching } = useQuery('posts', fetchPosts, {
    cacheTime: 10 * 60 * 1000, // Keep cached data for 10 minutes
    staleTime: 5 * 60 * 1000,  // Data is considered fresh for 5 minutes
    refetchOnWindowFocus: false, // Do not refetch when window regains focus
    keepPreviousData: true, // Keep showing old data while fetching new
  });

  // Log the data, error, and isError states for debugging
  console.log(data, isError, error, isLoading);

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;

  // Handle error state using isError
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts {isFetching && <small>Updating...</small>}</h1> {/* Show updating when fetching */}
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
