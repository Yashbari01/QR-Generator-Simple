import React from 'react';
import { FaGithub, FaBriefcase, FaHeart, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              QR Code Generator
            </h3>
            <p className="text-gray-400 text-sm">
              Create beautiful custom QR codes for your business or personal use.
            </p>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <div className="flex flex-col space-y-4">
              {/* Social Links */}
              <div className="flex justify-center md:justify-end space-x-6">
                <a
                  href="https://github.com/Yashbari01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-2xl" />
                </a>
                {/* <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-2xl" />
                </a> */}
                <a
                  href="https://yashbariportfolio.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                  aria-label="Portfolio"
                >
                  <FaBriefcase className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} QR Code Generator. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0 flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <FaHeart className="mx-2 text-red-500 animate-pulse" />
              <span>by</span>
              <a
                href="https://yashbariportfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-white hover:text-blue-400 transition-colors duration-300"
              >
                Yash Bari
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;