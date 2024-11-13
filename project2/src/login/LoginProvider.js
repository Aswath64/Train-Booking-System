// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Box1 from './login/Login';
import Box2 from './sign/SignUp';
import { LoginProvider } from './LoginContext'; // Import the provider
function App() {
  return (
    <LoginProvider> {/* Wrap the provider around the entire app */}
      <Router>
        <Routes >
          <Route path="/" element={<Box1 />} />
          <Route path="/Sign" element={<Box2 />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </LoginProvider>
  );
}

export default App;
