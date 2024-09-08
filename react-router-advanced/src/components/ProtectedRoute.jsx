import React from 'react';
import { Navigate } from 'react-router-dom';

// The ProtectedRoute component takes in `isAuthenticated` and `children` as props
const ProtectedRoute = ({ isAuthenticated, children }) => {
  // If not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the children components
  return children;
};

export default ProtectedRoute;
