import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Smartphone, ShoppingCart, User, Settings, HelpCircle } from 'lucide-react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/apple', label: 'Apple', icon: Smartphone },
    { path: '/samsung', label: 'Samsung', icon: Smartphone },
    { path: '/cart', label: 'Cart', icon: ShoppingCart },
    { path: '/profile', label: 'Profile', icon: User },
    { path: '/settings', label: 'Settings', icon: Settings },
    { path: '/help', label: 'Help', icon: HelpCircle },
  ];

  return (
    <div className="fixed top-20 left-4 z-40">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black/80 backdrop-blur-md text-white p-3 rounded-full shadow-lg hover:bg-black/90 transition-all duration-300 border border-white/20 hover:border-white/40 group"
      >
        {isOpen ? (
          <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <Menu className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 bg-black/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden min-w-48 animate-in slide-in-from-top-2 duration-300">
          <div className="p-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? 'bg-white text-black shadow-lg'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className={`h-5 w-5 transition-all duration-300 ${
                    isActive 
                      ? 'text-black' 
                      : 'text-gray-300 group-hover:text-white group-hover:scale-110'
                  }`} />
                  <span className={`font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-black' 
                      : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse"></div>
                  )}
                </Link>
              );
            })}
          </div>
          
          {/* Decorative bottom border */}
          <div className="h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient bg-300%"></div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default DropdownMenu;