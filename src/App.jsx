import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Home from './pages/Home';
// import Login from './pages/Login';
import WhiteboardPage from './pages/Whiteboard';

const App = () => {
  return (
    <Router>
      <Auth>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/whiteboard/:id" element={<WhiteboardPage />} />
        </Routes>
      </Auth>
    </Router>
  );
};

export default App;