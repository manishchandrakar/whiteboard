import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Collaborative Whiteboard</h1>
      <Link to="/whiteboard/new" className="btn btn-primary">Create New Whiteboard</Link>
      {/* Add a form to join existing whiteboard */}
    </div>
  );
};

export default Home;