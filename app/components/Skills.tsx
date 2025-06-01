"use client";

import React, { useState, useEffect } from "react";
import { Code, Database, Globe, Server } from "lucide-react";

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Sass",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Prisma",
  ];

  const skillCategories: Record<string, string[]> = {
    Frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Sass",
    ],
    Backend: ["Node.js", "Express"],
    Database: ["MongoDB", "SQL", "Prisma"],
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getSkillColor = (skill: string, index: number): string => {
    // Spider-Man inspired colors: red, blue, and web-like combinations
    const colors: string[] = [
      "from-red-500 to-red-700", // Classic Spider-Man red
      "from-blue-600 to-blue-800", // Spider-Man blue
      "from-red-600 to-blue-700", // Red to blue gradient
      "from-blue-500 to-red-600", // Blue to red gradient
      "from-red-500 to-rose-600", // Red variations
      "from-blue-600 to-indigo-700", // Blue variations
      "from-slate-700 to-red-600", // Dark web to red
      "from-blue-800 to-slate-800", // Blue to dark
    ];
    return colors[index % colors.length];
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: Record<string, any> = {
      Frontend: Globe,
      Backend: Server,
      Database: Database,
    };
    return iconMap[category] || Code;
  };

  return (
    <section className="py-20 bg-white dark:bg-zinc-950 transition-colors duration-300 relative overflow-hidden">
      {/* Spider web background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="spider-web"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M100,10 L100,190 M10,100 L190,100 M30,30 L170,170 M170,30 L30,170"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-red-500"
              />
              <circle
                cx="100"
                cy="100"
                r="3"
                fill="currentColor"
                className="text-red-600"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#spider-web)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Technical Skills
          </h2>
          {/* Spider-Man inspired underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-blue-600 to-red-500 mx-auto mb-6 rounded-full web-pulse"></div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to bring ideas
            to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className={`group relative p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/20 dark:hover:shadow-red-500/30 ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${getSkillColor(
                  skill,
                  index
                )} opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
              ></div>

              {/* Skill Icon */}
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getSkillColor(
                    skill,
                    index
                  )} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 web-shadow`}
                >
                  <span className="text-white font-bold text-lg">
                    {skill.charAt(0).toUpperCase()}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                  {skill}
                </h3>
              </div>

              {/* Spider-Man inspired hover effect */}
              {hoveredSkill === skill && (
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-blue-600 to-red-500 rounded-2xl blur-sm opacity-40 group-hover:opacity-70 transition-opacity duration-300 -z-10 web-glow"></div>
              )}
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(
            ([category, categorySkills], index) => (
              <div
                key={category}
                className={`p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${(skills.length + index) * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getSkillColor(
                      category,
                      index
                    )} flex items-center justify-center mr-4 web-shadow`}
                  >
                    {React.createElement(getCategoryIcon(category), {
                      size: 24,
                      className: "text-white",
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full hover:bg-red-100 hover:text-red-700 dark:hover:bg-red-900/30 dark:hover:text-red-300 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        @keyframes webPulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .web-pulse {
          animation: webPulse 2s ease-in-out infinite;
        }

        .web-shadow {
          box-shadow: 0 4px 20px rgba(239, 68, 68, 0.3);
        }

        .web-glow {
          animation: webGlow 1.5s ease-in-out infinite alternate;
        }

        @keyframes webGlow {
          from {
            opacity: 0.4;
          }
          to {
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
