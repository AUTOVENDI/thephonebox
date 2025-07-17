import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smartphone } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold text-white hover:text-gray-300 transition-all duration-300"
          >
            <div className="relative">
              <Smartphone className="h-8 w-8 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
            <span>The Phone Box</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                location.pathname === '/' 
                  ? 'bg-white text-black shadow-lg' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/apple" 
              className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                location.pathname === '/apple' 
                  ? 'bg-white text-black shadow-lg' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              Apple
            </Link>
            <Link 
              to="/samsung" 
              className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                location.pathname === '/samsung' 
                  ? 'bg-white text-black shadow-lg' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              Samsung
            </Link>
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden flex space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 ${
                location.pathname === '/' 
                  ? 'bg-white text-black' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/apple" 
              className={`px-3 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 ${
                location.pathname === '/apple' 
                  ? 'bg-white text-black' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              Apple
            </Link>
            <Link 
              to="/samsung" 
              className={`px-3 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 ${
                location.pathname === '/samsung' 
                  ? 'bg-white text-black' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              Samsung
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;