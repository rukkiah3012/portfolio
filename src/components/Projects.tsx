import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Code, Brain, BookOpen, Lightbulb } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  period?: string;
  icon: React.ReactNode;
  color: string;
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [animateCards, setAnimateCards] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateCards(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);
  
  const projects: Project[] = [
    {
      title: 'Blog Management System',
      description: 'Developed a backend for a Blog Management System using Node.js and Express.js. Key functionalities included creating, retrieving, updating, and deleting blog posts through RESTful APIs. Implemented middleware for seamless data processing and dynamic features.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['Node.js', 'Express.js', 'REST API'],
      period: 'Jun 2024',
      github: 'https://github.com/sajeena3012/Blog-Management',
      icon: <BookOpen size={24} />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Advancing Mental Health Support',
      description: 'Developed an automated system to detect depression and suicidal tendencies using text and audio inputs. The system processes multimodal inputs and employs machine learning models such as logistic regression, decision tree, random forest, and multinomial naive Bayes.',
      image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['Machine Learning', 'Python', 'Mental Health'],
      period: 'Jan 2025 - Present',
      github: 'https://github.com/sajeena3012',
      icon: <Brain size={24} />,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // Get unique tags for filter
  const allTags = ['all', ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
        <div className="h-1 w-20 bg-blue-600 dark:bg-pink-500 mx-auto"></div>
      </div>
      
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {allTags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeFilter === tag
                ? 'bg-blue-600 dark:bg-pink-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Projects grid */}
      <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-500 ${
              animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="relative overflow-hidden h-60">
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-80 z-10`}></div>
              
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              
              {/* Project icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                  {project.icon}
                </div>
              </div>
              
              {project.period && (
                <div className="absolute top-0 right-0 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 z-20">
                  {project.period}
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-400 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                )}
                
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Internship Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Internship Experience</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 relative">
              <div className="absolute -bottom-10 left-6">
                <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Lightbulb size={32} />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 pt-14">
              <div className="mb-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Unified Mentor Pvt. Ltd.</h4>
                <p className="text-gray-600 dark:text-gray-400">Jun 2024 – Aug 2024 (Remote)</p>
              </div>
              
              <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-blue-600 dark:text-blue-400">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM11.7071 6.70711L7.70711 10.7071C7.31658 11.0976 6.68342 11.0976 6.29289 10.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289C4.68342 6.90237 5.31658 6.90237 5.70711 7.29289L7 8.58579L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span>Gained hands-on experience in both front-end and back-end development.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-blue-600 dark:text-blue-400">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM11.7071 6.70711L7.70711 10.7071C7.31658 11.0976 6.68342 11.0976 6.29289 10.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289C4.68342 6.90237 5.31658 6.90237 5.70711 7.29289L7 8.58579L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span>Worked on a full-stack project involving React.js, Node.js, and Express.js.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-blue-600 dark:text-blue-400">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM11.7071 6.70711L7.70711 10.7071C7.31658 11.0976 6.68342 11.0976 6.29289 10.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289C4.68342 6.90237 5.31658 6.90237 5.70711 7.29289L7 8.58579L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span>Improved application performance and implemented new features.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="h-24 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 relative">
              <div className="absolute -bottom-10 left-6">
                <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <Code size={32} />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 pt-14">
              <div className="mb-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Disprz – Technical Writer</h4>
                <p className="text-gray-600 dark:text-gray-400">Mar 2025 – Jun 2025</p>
              </div>
              
              <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-purple-600 dark:text-purple-400">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM11.7071 6.70711L7.70711 10.7071C7.31658 11.0976 6.68342 11.0976 6.29289 10.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289C4.68342 6.90237 5.31658 6.90237 5.70711 7.29289L7 8.58579L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span>Created and refined technical documentation for software products.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-purple-600 dark:text-purple-400">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM11.7071 6.70711L7.70711 10.7071C7.31658 11.0976 6.68342 11.0976 6.29289 10.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289C4.68342 6.90237 5.31658 6.90237 5.70711 7.29289L7 8.58579L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span>Reviewed and restructured content, collaborated with developers.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-purple-600 dark:text-purple-400">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM11.7071 6.70711L7.70711 10.7071C7.31658 11.0976 6.68342 11.0976 6.29289 10.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289C4.68342 6.90237 5.31658 6.90237 5.70711 7.29289L7 8.58579L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span>Enhanced AI prompt clarity for better user engagement.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;