"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Github,
  ExternalLink,
  Filter,
  Star,
  Code2,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { projects } from "../lib/utils";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showSpiderSense, setShowSpiderSense] = useState(false);
  const [webAnimation, setWebAnimation] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
      ? projects.filter((p) => p.featured)
      : projects;

  const filterOptions = [
    {
      value: "all",
      label: "All Web Projects",
      icon: Code2,
      count: projects.length,
    },
    {
      value: "featured",
      label: "Hero Projects",
      icon: Star,
      count: projects.filter((p) => p.featured).length,
    },
  ];

  // Spider-Man project descriptions
  const spiderDescriptions = [
    "Web-slinging through clean code",
    "Building the web one component at a time",
    "Spider-sense approved functionality",
    "Responsibly responsive design",
    "Your friendly neighborhood project",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setWebAnimation(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Random spider-sense activation
    const spiderSenseInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        setShowSpiderSense(true);
        setTimeout(() => setShowSpiderSense(false), 3000);
      }
    }, 20000);

    return () => {
      observer.disconnect();
      clearInterval(spiderSenseInterval);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50/30 via-white to-blue-50/30 dark:from-red-950/20 dark:via-zinc-800 dark:to-blue-950/20 relative overflow-hidden"
    >
      {/* Spider-Web Background Pattern */}
      <div className="absolute inset-0 -z-20">
        <svg
          className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="projectWeb"
              x="0"
              y="0"
              width="150"
              height="150"
              patternUnits="userSpaceOnUse"
            >
              <g
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                className="text-red-500"
              >
                {/* Radial web lines */}
                <line x1="75" y1="75" x2="75" y2="25" />
                <line x1="75" y1="75" x2="110" y2="40" />
                <line x1="75" y1="75" x2="125" y2="75" />
                <line x1="75" y1="75" x2="110" y2="110" />
                <line x1="75" y1="75" x2="75" y2="125" />
                <line x1="75" y1="75" x2="40" y2="110" />
                <line x1="75" y1="75" x2="25" y2="75" />
                <line x1="75" y1="75" x2="40" y2="40" />
                {/* Concentric web circles */}
                <circle cx="75" cy="75" r="20" />
                <circle cx="75" cy="75" r="35" />
                <circle cx="75" cy="75" r="50" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projectWeb)" />
        </svg>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating Spider Elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              fontSize: `${12 + Math.random() * 8}px`,
            }}
          >
            {i % 3 === 0 ? (
              <span className="text-red-500">🕷️</span>
            ) : i % 3 === 1 ? (
              <span className="text-blue-500">🕸️</span>
            ) : (
              <span className="text-red-400">🔴</span>
            )}
          </div>
        ))}

        {/* Web Strands */}
        {webAnimation && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
            <defs>
              <linearGradient
                id="webStrand"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#dc2626" stopOpacity="0" />
                <stop offset="50%" stopColor="#dc2626" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[...Array(6)].map((_, i) => (
              <line
                key={i}
                x1={`${i * 20}%`}
                y1="0%"
                x2={`${100 - i * 15}%`}
                y2="100%"
                stroke="url(#webStrand)"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </svg>
        )}
      </div>

      {/* Spider-Sense Effect */}
      {showSpiderSense && (
        <div className="absolute inset-0 -z-5 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent animate-ping" />
          <div className="absolute top-4 right-4 text-red-600 font-bold text-sm animate-pulse bg-red-100 dark:bg-red-900/30 px-3 py-2 rounded-full border border-red-200 dark:border-red-700">
            🕷️ Spider-Sense: New projects detected!
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header with Spider-Man Theme */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            My Web of{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-red-600 via-blue-600 to-red-600 bg-clip-text text-transparent animate-gradient-x">
                Projects
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-lg blur opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </span>
          </h2>
        </div>

        {/* Enhanced Filter with Spider-Man Theme */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-300 relative ${
            isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
          }`}
          style={{ zIndex: 9999 }}
        >
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="group flex items-center gap-3 px-6 py-4 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border-2 border-red-200 dark:border-red-600 rounded-2xl hover:border-red-500 dark:hover:border-red-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform cursor-pointer"
            >
              <div className="w-5 h-5 text-red-600">
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full group-hover:animate-spin"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C10.9 2 10 2.9 10 4S10.9 6 12 6 14 5.1 14 4 13.1 2 12 2M21 9V7L15 13L13.5 7.5C13.1 6.6 12.1 6 11 6H10V4H8V6H7C5.9 6 5.1 6.6 4.5 7.5L3 13L9 7V9H15V7L21 9M6 14L12 20L18 14L15 11H9L6 14Z"
                  />
                </svg>
              </div>
              <span className="font-medium">
                {filterOptions.find((opt) => opt.value === filter)?.label}
              </span>
              <span className="bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 px-2 py-1 rounded-full text-xs font-medium">
                {filterOptions.find((opt) => opt.value === filter)?.count}
              </span>
              <span className="text-xs">🕸️</span>
            </button>

            {isFilterOpen && (
              <div
                className="absolute top-full mt-3 left-0 right-0 bg-white/95 dark:bg-zinc-800/95 backdrop-blur-lg border-2 border-red-200 dark:border-red-600 rounded-2xl shadow-2xl overflow-hidden animate-slide-down"
                style={{ zIndex: 9999 }}
              >
                {filterOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.value}
                      onClick={() => {
                        setFilter(option.value);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-6 py-4 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200 cursor-pointer ${
                        filter === option.value
                          ? "bg-gradient-to-r from-red-500/10 to-blue-500/10 dark:from-red-900/20 dark:to-blue-900/20 border-r-4 border-red-500"
                          : ""
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{option.label}</span>

                      <span className="ml-auto bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 px-2 py-1 rounded-full text-xs">
                        {option.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Projects Grid with Spider-Man Elements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-red-200/50 dark:border-red-700/50 hover:border-red-400 dark:hover:border-red-500 hover:scale-105 transform ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Spider-Man Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 via-blue-600/20 to-red-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Web Pattern Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <pattern
                      id={`cardWeb-${project.id}`}
                      x="0"
                      y="0"
                      width="25"
                      height="25"
                      patternUnits="userSpaceOnUse"
                    >
                      <g stroke="#dc2626" strokeWidth="0.5" fill="none">
                        <line x1="12.5" y1="12.5" x2="12.5" y2="5" />
                        <line x1="12.5" y1="12.5" x2="18" y2="7" />
                        <line x1="12.5" y1="12.5" x2="20" y2="12.5" />
                        <line x1="12.5" y1="12.5" x2="18" y2="18" />
                        <circle cx="12.5" cy="12.5" r="6" />
                        <circle cx="12.5" cy="12.5" r="10" />
                      </g>
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill={`url(#cardWeb-${project.id})`}
                  />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Spider-Man Themed Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-transparent to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Enhanced Project Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-zinc-800 transition-all duration-200 hover:scale-110 transform shadow-lg group/btn"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github
                        size={20}
                        className="text-zinc-700 dark:text-zinc-300 group-hover/btn:animate-pulse"
                      />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white rounded-full transition-all duration-200 hover:scale-110 transform shadow-lg group/btn relative overflow-hidden"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={20} className="relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </a>
                  </div>

                  {/* Enhanced Status Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.featured && (
                      <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-pulse">
                        <Star size={12} fill="currentColor" />
                        Hero Project
                      </div>
                    )}
                  </div>

                  {/* Spider-Sense Live Indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      <span className="animate-pulse">🕷️</span>
                      <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                      Live & Swinging
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <span
                        className={`text-xs transition-all duration-300 ${
                          hoveredProject === project.id
                            ? "opacity-100 text-red-500"
                            : "opacity-0"
                        }`}
                      >
                        🕸️
                      </span>
                      <Zap
                        className={`w-5 h-5 text-yellow-500 transition-all duration-300 ${
                          hoveredProject === project.id
                            ? "animate-pulse scale-110 text-red-500"
                            : "opacity-0"
                        }`}
                      />
                    </div>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Spider-Man Project Tagline */}
                  <div className="mb-4 text-xs text-red-600 dark:text-red-400 italic font-medium">
                    {spiderDescriptions[index % spiderDescriptions.length]} 🕷️
                  </div>

                  {/* Enhanced Technologies with Spider Theme */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-gradient-to-r from-red-50 to-blue-50 dark:from-red-950/20 dark:to-blue-950/20 text-sm rounded-xl text-zinc-700 dark:text-zinc-300 font-medium border border-red-200/50 dark:border-red-700/50 hover:border-red-400 dark:hover:border-red-500 transition-all duration-200 hover:scale-105 transform cursor-default hover:shadow-md"
                        style={{ animationDelay: `${techIndex * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced Links with Spider-Man Theme */}
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 font-medium"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github
                        size={18}
                        className="group-hover/link:rotate-12 transition-transform duration-200"
                      />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-red-600 dark:text-red-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-medium"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink
                        size={18}
                        className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-200"
                      />
                      Swing In
                    </a>
                  </div>
                </div>
              </div>

              {/* Spider-Man Project Number */}
              <div className="absolute top-6 left-6 w-8 h-8 bg-red-600/20 backdrop-blur-sm rounded-full flex items-center justify-center text-red-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-red-400/50">
                #{index + 1}
              </div>

              {/* Web Shooter Effect */}
              <div className="absolute bottom-6 right-6 w-4 h-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </div>
          ))}
        </div>

        {/* Spider-Man Quote Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-red-50 to-blue-50 dark:from-red-950/20 dark:to-blue-950/20 rounded-2xl border border-red-200/50 dark:border-red-800/30 max-w-3xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-2xl">🕷️</span>
              <h3 className="text-xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                With Great Code Comes Great Responsibility
              </h3>
              <span className="text-2xl">🕸️</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Every project in my web represents hours of careful crafting,
              debugging, and optimization.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
