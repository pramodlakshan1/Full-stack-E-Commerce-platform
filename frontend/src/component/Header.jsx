// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon, 
  ShoppingCartIcon, 
  UserIcon, 
  Bars3Icon, 
  XMarkIcon 
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/50 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl md:text-3xl font-black bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
              TechHub
            </span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8 lg:mx-16">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search laptops, keyboards, monitors..."
                className="w-full pl-12 pr-4 py-3 bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/30 dark:border-gray-600/50 rounded-full text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all shadow-inner"
              />
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
          </div>

          {/* Desktop Nav + Actions */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link 
              to="/producList" 
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            >
              Shop
            </Link>
            <Link 
              to="/deals" 
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            >
              Deals
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative group">
              <ShoppingCartIcon className="h-7 w-7 text-gray-700 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full min-w-4.5 h-5 flex items-center justify-center px-1 shadow-md transform group-hover:scale-110 transition-transform">
                3
              </span>
            </Link>

            {/* Login / Sign Up */}
            <Link 
              to="/login" 
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              Sign Up
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/40 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-7 w-7 text-gray-700 dark:text-gray-200" />
            ) : (
              <Bars3Icon className="h-7 w-7 text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>

            <Link 
              to="/products" 
              className="block py-3 px-4 text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/deals" 
              className="block py-3 px-4 text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Deals
            </Link>
            <Link 
              to="/cart" 
              className="block py-3 px-4 text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors items-center justify-between"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Cart</span>
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
            </Link>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col gap-3">
              <Link 
                to="/login" 
                className="py-3 px-4 text-center text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="py-3 px-4 text-center bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;