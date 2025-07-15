import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smartphone } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-white/90 via-purple-50/90 to-blue-50/90 backdrop-blur-md z-50 shadow-lg border-b border-purple-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            <div className="relative">
              <Smartphone className="h-8 w-8 text-purple-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-pulse"></div>
            </div>
            <span>The Phone Box</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                location.pathname === '/' 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 hover:text-purple-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/apple" 
              className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                location.pathname === '/apple' 
                  ? 'bg-gradient-to-r from-gray-600 to-gray-800 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 hover:text-gray-800'
              }`}
            >
              Apple
            </Link>
            <Link 
              to="/samsung" 
              className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                location.pathname === '/samsung' 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 hover:text-blue-700'
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
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/apple" 
              className={`px-3 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 ${
                location.pathname === '/apple' 
                  ? 'bg-gradient-to-r from-gray-600 to-gray-800 text-white' 
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200'
              }`}
            >
              Apple
            </Link>
            <Link 
              to="/samsung" 
              className={`px-3 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 ${
                location.pathname === '/samsung' 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' 
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100'
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