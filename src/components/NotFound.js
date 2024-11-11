// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaExclamationTriangle } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Add framer-motion for animations

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-purple-100 rounded-full opacity-50"></div>
          <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            {/* 404 Text */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="mb-8"
            >
              <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                404
              </h1>
            </motion.div>

            {/* Error Icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center mb-8"
            >
              <FaExclamationTriangle className="text-4xl text-yellow-500" />
            </motion.div>

            {/* Error Message */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              The page you're looking for seems to have wandered off into the digital wilderness.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FaHome className="mr-2" />
                Back to Home
              </Link>

              <button
                onClick={() => window.history.back()}
                className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Go Back
              </button>
            </div>

            {/* Search Suggestion */}
            {/* <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-gray-500 mb-4">Try searching for something else:</p>
              <div className="flex items-center max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition-colors duration-300">
                  <FaSearch />
                </button>
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* Additional Help Links */}
        <div className="mt-8 text-center text-gray-600">
          <p>Need help? Try these links:</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300">Help Center</a>
            <span>•</span>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300">Contact Support</a>
            <span>•</span>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300">Site Map</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
