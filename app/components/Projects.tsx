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
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
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
      label: "All Projects",
      icon: Code2,
      count: projects.length,
    },
    {
      value: "featured",
      label: "Featured",
      icon: Star,
      count: projects.filter((p) => p.featured).length,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-primary-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating Code Symbols */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary-300/20 dark:text-primary-600/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              fontSize: `${12 + Math.random() * 8}px`,
            }}
          >
            {
              ["</", "/>", "{}", "[]", "()", "=>"][
                Math.floor(Math.random() * 6)
              ]
            }
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 px-6 py-3 rounded-full border border-primary-200 dark:border-primary-800 backdrop-blur-sm mb-6">
            <TrendingUp className="w-5 h-5 text-primary-600 animate-pulse" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Latest Work
            </span>
            <Sparkles className="w-4 h-4 text-purple-600 animate-spin-slow" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Featured{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                Projects
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-lg blur opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </span>
          </h2>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in
            frontend development and full-stack applications. Each one tells a
            unique story of problem-solving and innovation.
          </p>
        </div>

        {/* Enhanced Filter */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-300 relative ${
            isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
          }`}
          style={{ zIndex: 9999 }}
        >
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="group flex items-center gap-3 px-6 py-4 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border-2 border-zinc-200 dark:border-zinc-600 rounded-2xl hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform cursor-pointer"
            >
              <Filter
                size={18}
                className="text-primary-600 group-hover:rotate-180 transition-transform duration-300"
              />
              <span className="font-medium">
                {filterOptions.find((opt) => opt.value === filter)?.label}
              </span>
              <span className="bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full text-xs font-medium">
                {filterOptions.find((opt) => opt.value === filter)?.count}
              </span>
            </button>

            {isFilterOpen && (
              <div
                className="absolute top-full mt-3 left-0 right-0 bg-white/95 dark:bg-zinc-800/95 backdrop-blur-lg border-2 border-zinc-200 dark:border-zinc-600 rounded-2xl shadow-2xl overflow-hidden animate-slide-down"
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
                      className={`w-full flex items-center gap-3 px-6 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-all duration-200 cursor-pointer ${
                        filter === option.value
                          ? "bg-gradient-to-l from-primary-500 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border-r-4 border-primary-500"
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

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-zinc-200/50 dark:border-zinc-700/50 hover:border-primary-300 dark:hover:border-primary-600 hover:scale-105 transform ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              // @ts-expect-error - React event handler with custom prop
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Project Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-zinc-800 transition-all duration-200 hover:scale-110 transform shadow-lg"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github
                        size={20}
                        className="text-zinc-700 dark:text-zinc-300"
                      />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-all duration-200 hover:scale-110 transform shadow-lg"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  {/* Status Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.featured && (
                      <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        <Star size={12} fill="currentColor" />
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Live Indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      Live
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <Zap
                      className={`w-5 h-5 text-yellow-500 transition-all duration-300 ${
                        // @ts-expect-error - Custom comparison with potentially undefined value
                        hoveredProject === project.id
                          ? "animate-pulse scale-110"
                          : "opacity-0"
                      }`}
                    />
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Enhanced Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 text-sm rounded-xl text-zinc-700 dark:text-zinc-300 font-medium border border-zinc-200 dark:border-zinc-600 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200 hover:scale-105 transform cursor-default"
                        style={{ animationDelay: `${techIndex * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-200 font-medium"
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
                      className="group/link flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-200 font-medium"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink
                        size={18}
                        className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-200"
                      />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Number */}
              <div className="absolute top-6 left-6 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {index + 1}
              </div>
            </div>
          ))}
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
