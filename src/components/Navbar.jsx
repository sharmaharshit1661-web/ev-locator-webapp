import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Map as MapIcon, Info, Mail } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <Zap className="w-5 h-5" /> },
    { name: 'Map', path: '/map', icon: <MapIcon className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <Info className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <nav className="bg-surface dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">VoltLocator</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-600 bg-primary-50 dark:bg-gray-800 dark:text-primary-500'
                    : 'text-gray-600 hover:text-primary-500 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-400'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center sm:hidden">
            <button className="text-gray-600 dark:text-gray-300 hover:text-primary-500">
              <MapIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile nav placeholder - simplified for initial build */}
      <div className="sm:hidden border-t border-gray-200 dark:border-gray-800 bg-surface dark:bg-surface-dark flex justify-around py-2">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex flex-col items-center p-2 rounded-md ${
              location.pathname === link.path
                ? 'text-primary-600 dark:text-primary-500'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            {link.icon}
            <span className="text-xs mt-1">{link.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
