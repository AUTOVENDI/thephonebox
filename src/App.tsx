import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DropdownMenu from './components/DropdownMenu';
import Home from './pages/Home';
import Apple from './pages/Apple';
import Samsung from './pages/Samsung';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <DropdownMenu />
        <DropdownMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apple" element={<Apple />} />
          <Route path="/samsung" element={<Samsung />} />
          <Route path="/:brand/product/:productId" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;