import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Apple from './pages/Apple';
import Samsung from './pages/Samsung';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apple" element={<Apple />} />
          <Route path="/samsung" element={<Samsung />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;