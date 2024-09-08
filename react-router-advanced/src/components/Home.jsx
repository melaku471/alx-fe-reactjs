import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/profile">Go to Profile</Link>
          </li>
          <li>
            <Link to="/posts/1">Go to Blog Post 1</Link>
          </li>
          <li>
            <Link to="/posts/2">Go to Blog Post 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
