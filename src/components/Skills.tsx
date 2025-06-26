import React, { useEffect, useRef } from "react";
import { Code, Server, Wrench } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

type Skill = {
  name: string;
  logo: string;
  color: string;
  darkLogo?: string;
};

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll(".skill-item");
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-in");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming & Web",
      icon: <Code size={24} />,
      skills: [
        {
          name: "Java",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          color: "from-red-500 to-red-600",
        },
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          color: "from-blue-500 to-yellow-500",
        },
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "from-cyan-400 to-cyan-500",
        },
        {
          name: "HTML5",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "from-orange-500 to-red-500",
        },
        {
          name: "CSS3",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "from-blue-500 to-blue-600",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "from-yellow-400 to-yellow-500",
        },
        {
          name: "jQuery",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
          color: "from-blue-400 to-blue-500",
        },
        {
          name: "Bootstrap",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          color: "from-purple-500 to-purple-600",
        },
      ],
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: [
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          color: "from-green-500 to-green-600",
        },
        {
          name: "REST API",
          logo: "https://cdn.simpleicons.org/postman/FF6C37/000000",
          darkLogo: "https://cdn.simpleicons.org/postman/FF6C37/ffffff",
          color: "from-orange-500 to-orange-600",
        },
        {
          name: "Express.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          darkLogo:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
          color: "from-gray-500 to-gray-700",
        },
        {
          name: "SQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          color: "from-blue-600 to-blue-700",
        },
      ],
    },
    {
      title: "Tools",
      icon: <Wrench size={24} />,
      skills: [
        {
          name: "PyCharm",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
          color: "from-green-400 to-green-500",
        },
        {
          name: "VS Code",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          color: "from-blue-500 to-blue-600",
        },
        {
          name: "IntelliJ IDEA",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
          color: "from-pink-500 to-pink-600",
        },
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          color: "from-orange-500 to-orange-600",
        },
        {
          name: "GitHub",
          logo: "https://cdn.simpleicons.org/github/000000",
          darkLogo: "https://cdn.simpleicons.org/github/ffffff",
          color: "from-gray-600 to-gray-700",
        },
      ],
    },
  ];

  return (
    <div
      ref={skillsRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My Skills
        </h2>
        <div className="h-1 w-20 bg-blue-600 dark:bg-pink-500 mx-auto"></div>
      </div>

      <div className="space-y-16">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="relative">
            {/* Centered Title & Icon */}
            <div className="flex flex-col items-center mb-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-white mb-2">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {category.title}
              </h3>
            </div>

            {/* Skill Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="skill-item opacity-0 translate-y-4 transition-all duration-500"
                  style={{ transitionDelay: `${skillIndex * 100}ms` }}
                >
                  <div className="group relative flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative w-20 h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full p-4 transform hover:scale-110 transition-all duration-300 animate-logo-float shadow-lg">
                        <img
                          src={darkMode ? skill.darkLogo || skill.logo : skill.logo}
                          alt={skill.name}
                          className="w-12 h-12 object-contain transition-all duration-300"
                        />
                      </div>
                    </div>
                    <span className="mt-4 text-gray-900 dark:text-white text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
