import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost'; // Ensure this is imported
import ProtectedRoute from './components/ProtectedRoute'; // Ensure this is imported

function App() {
  const isAuthenticated = true; // Simulate authentication status

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Protected Route for Profile */}
        <Route 
          path="/profile/*" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        
        {/* Dynamic Route for BlogPost */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
