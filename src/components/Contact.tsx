import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
        <div className="h-1 w-20 bg-blue-600 dark:bg-pink-500 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="lg:order-2">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                <a href="mailto:rukkiahsajeena3012@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-400 transition-colors">
                  rukkiahsajeena3012@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Available upon request
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/rukkiah-sajeena-m-88b2a7268/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/sajeena3012" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        {/* Contact Message */}
        <div className="lg:order-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect!</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I'm always open to discussing new opportunities, projects, or just having a chat about technology. Feel free to reach out to me through:
          </p>
          
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 dark:bg-pink-500 rounded-full mr-3"></span>
              Email me directly at <a href="mailto:rukkiahsajeena3012@gmail.com" className="ml-1 text-blue-600 dark:text-pink-400 hover:underline">rukkiahsajeena3012@gmail.com</a>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 dark:bg-pink-500 rounded-full mr-3"></span>
              Connect with me on <a href="https://www.linkedin.com/in/rukkiah-sajeena-m-88b2a7268/" target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-600 dark:text-pink-400 hover:underline">LinkedIn</a>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 dark:bg-pink-500 rounded-full mr-3"></span>
              Check out my projects on <a href="https://github.com/sajeena3012" target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-600 dark:text-pink-400 hover:underline">GitHub</a>
            </li>
          </ul>
          
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              I typically respond within 24-48 hours. Looking forward to connecting with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;