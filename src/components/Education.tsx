import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

type EducationItem = {
  period: string;
  degree: string;
  institution: string;
  description: string;
  icon: React.ReactNode;
};

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      period: 'Oct 2021 - Apr 2025',
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'B.S.A Crescent Institute of Science and Technology, Chennai',
      description: 'One of the department\'s highest GPA of 9.79 in Sixth semester. CGPA: 9.11 (Semester 1 to 7)',
      icon: <GraduationCap size={24} />,
    },
    {
      period: 'Jun 2019 - May 2021',
      degree: 'Senior Secondary Education (PCM with Biology)',
      institution: 'Hilton Matric Higher Secondary School, Old Courtallam',
      description: 'Percentage: 91.97%',
      icon: <BookOpen size={24} />,
    },
    {
      period: 'Jun 2018 - May 2019',
      degree: 'Secondary Education',
      institution: 'Hilton Matric Higher Secondary School, Old Courtallam',
      description: 'Percentage: 92%',
      icon: <Award size={24} />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education & Certifications</h2>
        <div className="h-1 w-20 bg-blue-600 dark:bg-pink-500 mx-auto"></div>
      </div>
      
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
        
        <div className="space-y-12">
          {educationItems.map((item, index) => (
            <div key={index} className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 dark:bg-pink-500 border-4 border-white dark:border-gray-900"></div>
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                      {item.icon}
                    </div>
                    <span className="text-sm font-semibold text-blue-600 dark:text-pink-400">{item.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.degree}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{item.institution}</p>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Certifications Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Certifications</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <a 
            href="https://www.cambridgeenglish.org/find-a-centre/find-an-exam-centre/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group h-full"
          >
            <div className="bg-white dark:bg-gray-800 h-[280px] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex flex-col">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center bg-white dark:bg-gray-800 rounded-full p-4 transform hover:scale-110 transition-all duration-300 animate-logo-float shadow-lg">
                  <Award size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="flex flex-col flex-grow mt-6 text-center">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">Business English Certificate</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Cambridge</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-auto">Sept 2023</p>
              </div>
              <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </a>
          
          <a 
            href="https://www.coursera.org/account/accomplishments/verify/BYYKQQKAVJHZ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group h-full"
          >
            <div className="bg-white dark:bg-gray-800 h-[280px] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex flex-col">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center bg-white dark:bg-gray-800 rounded-full p-4 transform hover:scale-110 transition-all duration-300 animate-logo-float shadow-lg">
                  <Award size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="flex flex-col flex-grow mt-6 text-center">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">Python for Data Science, AI & Development</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">IBM</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-auto">Oct 2023</p>
              </div>
              <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </a>
          
          <a 
            href="https://www.udemy.com/certificate/UC-1c7efc00-e910-4250-bc84-39acfdde7acd/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group h-full"
          >
            <div className="bg-white dark:bg-gray-800 h-[280px] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex flex-col">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center bg-white dark:bg-gray-800 rounded-full p-4 transform hover:scale-110 transition-all duration-300 animate-logo-float shadow-lg">
                  <Award size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="flex flex-col flex-grow mt-6 text-center">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">Web Development</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Udemy</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-auto">Sept 2024</p>
              </div>
              <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </a>
          
          <a 
            href="https://www.linkedin.com/learning/certificates/ca6aff482ca4034b7fcab77f8014875848e2e379e8d35931108ffeb09396ffe9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group h-full"
          >
            <div className="bg-white dark:bg-gray-800 h-[280px] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex flex-col">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center bg-white dark:bg-gray-800 rounded-full p-4 transform hover:scale-110 transition-all duration-300 animate-logo-float shadow-lg">
                  <Award size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="flex flex-col flex-grow mt-6 text-center">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">Git and GitHub</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">LinkedIn Learning</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-auto">Aug 2023</p>
              </div>
              <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </a>

          <a 
            href="https://drive.google.com/file/d/1iikxFky6gI6XwSDaUJVOw0Rl4efSZslJ/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group h-full"
          >
            <div className="bg-white dark:bg-gray-800 h-[280px] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex flex-col">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center bg-white dark:bg-gray-800 rounded-full p-4 transform hover:scale-110 transition-all duration-300 animate-logo-float shadow-lg">
                  <Award size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="flex flex-col flex-grow mt-6 text-center">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">Develop Soft Skills that Industry Demands</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">TCS</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-auto">Jul 2023</p>
              </div>
              <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;