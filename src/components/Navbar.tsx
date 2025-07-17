import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smartphone } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 shadow-2xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Animated background line */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
          
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold text-white hover:text-gray-300 transition-all duration-300 group"
          >
            <div className="relative transform group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="h-8 w-8 text-white group-hover:animate-bounce" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-gradient bg-300%">
              The Phone Box
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg relative overflow-hidden ${
                location.pathname === '/' 
                  ? 'bg-white text-black shadow-2xl animate-pulse' 
                  : 'text-white hover:bg-white/10 hover:text-white border border-white/20 hover:border-white/40'
              }`}
            >
              {location.pathname !== '/' && (
                <div className="absolute inset-0 bg-white/5 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              )}
              <span className="relative z-10">
              Home
              </span>
            </Link>
            <Link 
              to="/apple" 
              className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg relative overflow-hidden ${
                location.pathname === '/apple' 
                  ? 'bg-white text-black shadow-2xl animate-pulse' 
                  : 'text-white hover:bg-white/10 hover:text-white border border-white/20 hover:border-white/40'
              }`}
            >
              {location.pathname !== '/apple' && (
                <div className="absolute inset-0 bg-white/5 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              )}
              <span className="relative z-10">
              Apple
              </span>
            </Link>
            <Link 
              to="/samsung" 
              className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg relative overflow-hidden ${
                location.pathname === '/samsung' 
                  ? 'bg-white text-black shadow-2xl animate-pulse' 
                  : 'text-white hover:bg-white/10 hover:text-white border border-white/20 hover:border-white/40'
              }`}
            >
              {location.pathname !== '/samsung' && (
                <div className="absolute inset-0 bg-white/5 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              )}
              <span className="relative z-10">
              Samsung
              </span>
            </Link>
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden flex space-x-2">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-110 ${
                location.pathname === '/' 
                  ? 'bg-white text-black animate-pulse' 
                  : 'text-white hover:bg-white/10 border border-white/20'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/apple" 
              className={`px-3 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-110 ${
                location.pathname === '/apple' 
                  ? 'bg-white text-black animate-pulse' 
                  : 'text-white hover:bg-white/10 border border-white/20'
              }`}
            >
              Apple
            </Link>
            <Link 
              to="/samsung" 
              className={`px-3 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-110 ${
                location.pathname === '/samsung' 
                  ? 'bg-white text-black animate-pulse' 
                  : 'text-white hover:bg-white/10 border border-white/20'
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