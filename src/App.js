import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import QRCodeGenerator from './components/QRCodeGenerator';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Image from './Image/image1.png';

// Navbar Component
const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <a href="/" className={`flex items-center space-x-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <img src={Image} alt="Logo" className="h-8 w-8" />
              <span className="font-bold text-xl">QR Generator</span>
            </a>
          </div>

          {/* Navigation Links */}
          {/* <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" text="Home" darkMode={darkMode} />
            <NavLink href="/about" text="About" darkMode={darkMode} />
            <NavLink href="/contact" text="Contact" darkMode={darkMode} />
          </div> */}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'
            } hover:bg-opacity-80 transition-colors duration-200`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

// NavLink Component
const NavLink = ({ href, text, darkMode }) => (
  <a
    href={href}
    className={`${
      darkMode
        ? 'text-gray-300 hover:text-white'
        : 'text-gray-600 hover:text-gray-900'
    } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
  >
    {text}
  </a>
);

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  // Handle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    setLoading(false);
  }, []);

  // Apply dark mode to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className={`App min-h-screen flex flex-col ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      } transition-colors duration-300`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        {/* Main Content */}
        <main className="flex-grow pt-16">
          <Routes>
            <Route 
              path="/" 
              element={
                <div className="container mx-auto px-4 py-8">
                  <QRCodeGenerator darkMode={darkMode} />
                </div>
              } 
            />
            <Route path="*" element={<NotFound darkMode={darkMode} />} />
          </Routes>
        </main>

        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;