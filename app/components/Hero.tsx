"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowDown,
  Sparkles,
  Code,
  Zap,
} from "lucide-react";
import { skills } from "../lib/utils";

export default function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSpiderSense, setShowSpiderSense] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Spider-Man quotes that rotate
  const spiderQuotes = [
    "With great power comes great responsibility",
    "Anyone can wear the mask",
    "Be greater, be yourself",
    "No one can win every battle, but no man should fall without a struggle.",
  ];
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);

    // Spider-Man quote rotation
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % spiderQuotes.length);
    }, 5000);

    // Random spider-sense activation
    const spiderSenseInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setShowSpiderSense(true);
        setTimeout(() => setShowSpiderSense(false), 2000);
      }
    }, 15000);

    return () => {
      clearInterval(interval);
      clearInterval(quoteInterval);
      clearInterval(spiderSenseInterval);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      return () =>
        heroElement.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
    >
      {/* Spider-Web Background Pattern */}
      <div className="absolute inset-0 -z-20">
        <svg
          className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Spider web pattern */}
          <defs>
            <pattern
              id="spiderweb"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <g stroke="currentColor" strokeWidth="1" fill="none">
                {/* Radial lines */}
                <line x1="100" y1="100" x2="100" y2="0" />
                <line x1="100" y1="100" x2="170.7" y2="29.3" />
                <line x1="100" y1="100" x2="200" y2="100" />
                <line x1="100" y1="100" x2="170.7" y2="170.7" />
                <line x1="100" y1="100" x2="100" y2="200" />
                <line x1="100" y1="100" x2="29.3" y2="170.7" />
                <line x1="100" y1="100" x2="0" y2="100" />
                <line x1="100" y1="100" x2="29.3" y2="29.3" />
                {/* Concentric polygons */}
                <polygon points="100,60 130,70 130,130 100,140 70,130 70,70" />
                <polygon points="100,40 150,55 150,145 100,160 50,145 50,55" />
                <polygon points="100,20 170,40 170,160 100,180 30,160 30,40" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#spiderweb)" />
        </svg>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Spider-Man Red/Blue Gradient Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/15 to-blue-600/15 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${
              mousePosition.y * 20
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/15 to-red-500/15 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${
              mousePosition.y * -15
            }px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: "1s",
          }}
        />

        {/* Spider Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {/* Mini Spider SVG */}
            <svg viewBox="0 0 24 24" className="w-full h-full text-red-500/30">
              <path
                fill="currentColor"
                d="M12 2C10.9 2 10 2.9 10 4S10.9 6 12 6 14 5.1 14 4 13.1 2 12 2M21 9V7L15 13L13.5 7.5C13.1 6.6 12.1 6 11 6H10V4H8V6H7C5.9 6 5.1 6.6 4.5 7.5L3 13L9 7V9H15V7L21 9M6 14L12 20L18 14L15 11H9L6 14Z"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Spider-Sense Effect */}
      {showSpiderSense && (
        <div className="absolute inset-0 -z-5 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent animate-ping" />
          <div className="absolute top-4 left-4 text-red-500 font-bold text-sm animate-pulse">
            🕷️ Spider-Sense Tingling...
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded
                ? "animate-slide-in-left"
                : "opacity-0 translate-x-[-50px]"
            }`}
          >
            {/* Spider-Man Status Badge */}
            <div className="mb-6 relative">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-blue-100 dark:from-red-900/30 dark:to-blue-900/30 px-4 py-2 rounded-full border border-red-200 dark:border-red-800 backdrop-blur-sm">
                <div className="w-4 h-4 text-red-600">
                  {/* Spider icon */}
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      fill="currentColor"
                      d="M12 2C10.9 2 10 2.9 10 4S10.9 6 12 6 14 5.1 14 4 13.1 2 12 2M21 9V7L15 13L13.5 7.5C13.1 6.6 12.1 6 11 6H10V4H8V6H7C5.9 6 5.1 6.6 4.5 7.5L3 13L9 7V9H15V7L21 9M6 14L12 20L18 14L15 11H9L6 14Z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-red-700 dark:text-red-300">
                  Your Friendly Neighborhood Developer
                </span>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Hi, I&apos;m{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-red-600 via-blue-600 to-red-600 bg-clip-text text-transparent animate-gradient-x">
                  Youssef Hassany
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-lg blur opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </span>
            </h1>

            <div className="mb-6">
              <h2 className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400">
                Frontend Developer Slinging Code with{" "}
              </h2>
              <div className="mt-2 h-8 overflow-hidden">
                <div
                  className="transition-transform duration-500 ease-out"
                  style={{ transform: `translateY(-${currentSkill * 32}px)` }}
                >
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="h-8 flex items-center text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent"
                    >
                      <Code className="w-6 h-6 mr-2 text-red-600" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl leading-relaxed">
              I create beautiful, responsive, and performant web applications
              using modern technologies. With expertise in React, Next.js, and
              TypeScript, I bring ideas to life through clean code and stunning
              user experiences.
            </p>

            {/* Spider-Man Quote */}
            <div className="mb-8 p-4 bg-gradient-to-r from-red-50 to-blue-50 dark:from-red-950/20 dark:to-blue-950/20 rounded-xl border border-red-200/50 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <div className="text-red-500 text-2xl">"</div>
                <div className="flex-1">
                  <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 italic font-medium transition-all duration-500">
                    {spiderQuotes[currentQuote]}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    - Spider-Man
                  </p>
                </div>
                <div className="text-red-500">🕷️</div>
              </div>
            </div>

            {/* Enhanced CTA Buttons with Spider-Man theme */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 md:text-[14px]">
              <Link
                href="#projects"
                className="group relative bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🕸️ Swing to My Work
                  <ArrowDown
                    size={20}
                    className="group-hover:translate-y-1 transition-transform duration-300"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="#contact"
                className="group relative border-2 border-red-300 dark:border-red-600 hover:border-red-500 dark:hover:border-red-400 text-zinc-700 dark:text-zinc-300 font-medium py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-sm hover:shadow-lg hover:scale-105 transform"
              >
                <Mail
                  size={20}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
                Call for Help
              </Link>

              <a
                href="/Youssef-Hassany-Resume.pdf"
                download
                className="group relative border-2 border-blue-300 dark:border-blue-600 hover:border-blue-500 dark:hover:border-blue-400 text-zinc-700 dark:text-zinc-300 font-medium py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-sm hover:shadow-lg hover:scale-105 transform"
                aria-label="Download Resume"
              >
                <Download
                  size={20}
                  className="group-hover:translate-y-[-2px] transition-transform duration-300"
                />
                Download Resume
              </a>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-4">
              {[
                {
                  href: "https://github.com/youssef-hassany",
                  icon: Github,
                  label: "GitHub Profile",
                  color: "hover:text-gray-900 dark:hover:text-white",
                },
                {
                  href: "https://www.linkedin.com/in/youssef-hassany-862a37284/",
                  icon: Linkedin,
                  label: "LinkedIn Profile",
                  color: "hover:text-blue-600",
                },
                {
                  href: "mailto:youssefhassany22@gmail.com",
                  icon: Mail,
                  label: "Email Contact",
                  color: "hover:text-red-500",
                },
              ].map(({ href, icon: Icon, label, color }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={`group p-4 rounded-xl bg-zinc-100/50 dark:bg-zinc-800/50 hover:bg-red-100/50 dark:hover:bg-red-800/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg transform ${color} border border-transparent hover:border-red-200 dark:hover:border-red-700`}
                  aria-label={label}
                >
                  <Icon
                    size={24}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Profile Image with Spider-Man elements */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isLoaded
                ? "animate-slide-in-right"
                : "opacity-0 translate-x-[50px]"
            }`}
          >
            <div className="relative group">
              {/* Spider-Man Animated Border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-spin-slow" />

              {/* Profile Container */}
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-red-500 dark:border-red-600 shadow-2xl group-hover:scale-105 transition-transform duration-500 relative">
                  <Image
                    src="/images/profile.jpg"
                    alt="Youssef Hassany - Your Friendly Neighborhood Developer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  {/* Spider-Man overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Web pattern overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <pattern
                          id="web"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <g stroke="#dc2626" strokeWidth="0.5" fill="none">
                            <line x1="10" y1="10" x2="10" y2="0" />
                            <line x1="10" y1="10" x2="17" y2="3" />
                            <line x1="10" y1="10" x2="20" y2="10" />
                            <line x1="10" y1="10" x2="17" y2="17" />
                            <circle cx="10" cy="10" r="3" />
                            <circle cx="10" cy="10" r="6" />
                          </g>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#web)" />
                    </svg>
                  </div>
                </div>

                {/* Spider-Man Status Indicator */}
                <div className="absolute -top-4 -right-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white dark:border-zinc-900 animate-pulse shadow-lg flex items-center justify-center">
                    <span className="text-white text-xs">🕷️</span>
                  </div>
                  <div className="absolute w-12 h-12 bg-red-500/20 rounded-full animate-ping" />
                </div>

                {/* Floating Spider-Man Icons */}
                <div className="absolute -left-8 top-1/4 animate-float">
                  <div className="p-3 bg-red-100 dark:bg-red-800 rounded-full shadow-lg border border-red-200 dark:border-red-700">
                    <Zap className="w-5 h-5 text-red-500" />
                  </div>
                </div>

                <div
                  className="absolute -right-8 bottom-1/4 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-full shadow-lg border border-blue-200 dark:border-blue-700">
                    <Code className="w-5 h-5 text-blue-500" />
                  </div>
                </div>

                {/* Web shooter on wrist */}
                <div className="absolute bottom-16 -left-6 w-6 h-6 bg-gradient-to-r from-red-600 to-blue-600 rounded-full shadow-lg border-2 border-white dark:border-zinc-900 animate-pulse" />
              </div>
            </div>
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
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
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

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}
