"use client";

import React, { useState, useEffect } from "react";
import { Code, Database, Globe, Server, LucideIcon } from "lucide-react";

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
    const colors: string[] = [
      "from-blue-500 to-purple-600",
      "from-green-500 to-teal-600",
      "from-orange-500 to-red-600",
      "from-pink-500 to-rose-600",
      "from-indigo-500 to-blue-600",
      "from-yellow-500 to-orange-600",
      "from-purple-500 to-pink-600",
      "from-teal-500 to-green-600",
    ];
    return colors[index % colors.length];
  };

  const getCategoryIcon = (category: string): LucideIcon => {
    const iconMap: Record<string, LucideIcon> = {
      Frontend: Globe,
      Backend: Server,
      Database: Database,
    };
    return iconMap[category] || Code;
  };

  return (
    <section className="py-20 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
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
              className={`group relative p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl ${
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
                )} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              {/* Skill Icon */}
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getSkillColor(
                    skill,
                    index
                  )} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-white font-bold text-lg">
                    {skill.charAt(0).toUpperCase()}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {skill}
                </h3>
              </div>

              {/* Hover Effect */}
              {hoveredSkill === skill && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-sm opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
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
                className={`p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${(skills.length + index) * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getSkillColor(
                      category,
                      index
                    )} flex items-center justify-center mr-4`}
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
                      className="px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors duration-200"
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
      `}</style>
    </section>
  );
};

export default Skills;
