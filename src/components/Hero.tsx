import React, { useEffect, useRef } from 'react';
import { ArrowDown, FileText, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: number | null = null;
    
    const startAnimation = () => {
      let iteration = 0;
      const originalText = text.dataset.value || "";
      
      clearInterval(interval as number);
      
      interval = setInterval(() => {
        text.innerText = originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        
        if (iteration >= originalText.length) {
          clearInterval(interval as number);
        }
        
        iteration += 1 / 3;
      }, 30) as unknown as number;
    };

    startAnimation();
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-pink-600/10 dark:from-blue-900/20 dark:to-pink-900/20"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <h1 
            ref={textRef} 
            data-value="RUKKIAH SAJEENA M"
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 dark:from-blue-400 dark:to-pink-400 mb-4 tracking-tight"
          >
            RUKKIAH SAJEENA M
          </h1>
          
          <p className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
           Developer | Computer Science Student
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              View My Work
            </a>
            
            <a 
              href="https://drive.google.com/file/d/1lEdcx-mMs-8maJvFW4tAOzUC6Lkw_ZGV/view" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group px-8 py-4 rounded-full bg-transparent border-2 border-pink-400 text-pink-600 dark:text-pink-400 hover:bg-pink-400 hover:text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25 flex items-center justify-center gap-2"
            >
              <FileText size={20} />
              View Resume
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gray-900/10 dark:bg-white/10 hover:bg-gray-900/20 dark:hover:bg-white/20 text-gray-900 dark:text-white font-medium backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a 
          href="#about" 
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 animate-bounce inline-block"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </div>
  );
};

export default Hero;