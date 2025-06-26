import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          contentRef.current?.classList.remove('opacity-0', 'translate-y-4');
          contentRef.current?.classList.add('opacity-100', 'translate-y-0');
        }
      },
      { threshold: 0.5 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
        <div className="h-1 w-20 bg-blue-600 dark:bg-pink-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <div
            ref={contentRef}
            className="space-y-6 opacity-0 translate-y-4 transition-all duration-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm Rukkiah Sajeena M
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Proactive computer science graduate skilled in software development, testing, and documentation. I'm passionate about tackling complex challenges and driving innovation through collaborative problem-solving and cutting-edge technology.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              With experience in Agile environments, I focus on delivering high-quality solutions. I'm seeking to contribute to a dynamic team while continuously upskilling in new technologies.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I recently completed my B.Tech in Computer Science and Engineering. I thrive on turning innovative ideas into practical solutions, and my journey in technology is driven by a deep curiosity and commitment to creating impactful software that makes a difference.
            </p>

            <div className="flex justify-center sm:justify-start mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 dark:bg-pink-600 dark:hover:bg-pink-700 transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-pink-500 shadow-xl">
              <img
                src="/image.png"
                alt="Rukkiah Sajeena M"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 dark:bg-pink-500 rounded-full opacity-20 z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-500 dark:bg-blue-600 rounded-full opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;