import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-gray-900 dark:text-white">
              Rukkiah Sajeena M
            </a>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-400 transition-colors">
              About
            </a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-400 transition-colors">
              Contact
            </a>
          </div>
          
          <div>
            <p className="text-gray-700 dark:text-gray-300 flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> by Rukkiah Sajeena M © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;