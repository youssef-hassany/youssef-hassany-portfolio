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
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
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
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${
              mousePosition.y * 20
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${
              mousePosition.y * -15
            }px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: "1s",
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

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
            {/* Floating Icon */}
            <div className="mb-6 relative">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full border border-primary-200 dark:border-primary-800 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary-600 animate-spin-slow" />
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                  Available for work
                </span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Hi, I&apos;m{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                  Youssef Hassany
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-lg blur opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </span>
            </h1>

            <div className="mb-6">
              <h2 className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400">
                Frontend Developer Working with{" "}
              </h2>
              <div className="mt-2 h-8 overflow-hidden">
                <div
                  className="transition-transform duration-500 ease-out"
                  style={{ transform: `translateY(-${currentSkill * 32}px)` }}
                >
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="h-8 flex items-center text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"
                    >
                      <Code className="w-6 h-6 mr-2 text-primary-600" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl leading-relaxed">
              I create beautiful, responsive, and performant web applications
              using modern technologies. With expertise in React, Next.js, and
              TypeScript, I bring ideas to life through clean code and stunning
              user experiences.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 md:text-[14px]">
              <Link
                href="#projects"
                className="group relative bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowDown
                    size={20}
                    className="group-hover:translate-y-1 transition-transform duration-300"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="#contact"
                className="group relative border-2 border-zinc-300 dark:border-zinc-600 hover:border-primary-500 dark:hover:border-primary-400 text-zinc-700 dark:text-zinc-300 font-medium py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-sm hover:shadow-lg hover:scale-105 transform"
              >
                <Mail
                  size={20}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
                Get In Touch
              </Link>

              <a
                href="/Youssef-Hassany-Resume.pdf"
                download
                className="group relative border-2 border-zinc-300 dark:border-zinc-600 hover:border-primary-500 dark:hover:border-primary-400 text-zinc-700 dark:text-zinc-300 font-medium py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-sm hover:shadow-lg hover:scale-105 transform"
                aria-label="Download Resume"
              >
                <Download
                  size={20}
                  className="group-hover:translate-y-[-2px] transition-transform duration-300"
                />
                Download CV
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
                  className={`group p-4 rounded-xl bg-zinc-100/50 dark:bg-zinc-800/50 hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg transform ${color}`}
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

          {/* Enhanced Profile Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isLoaded
                ? "animate-slide-in-right"
                : "opacity-0 translate-x-[50px]"
            }`}
          >
            <div className="relative group">
              {/* Animated Border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-spin-slow" />

              {/* Profile Container */}
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/profile.jpg"
                    alt="Youssef Hassany - Frontend Developer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Status Indicator */}
                <div className="absolute -top-4 -right-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-zinc-900 animate-pulse shadow-lg" />
                  <div className="absolute w-12 h-12 bg-green-500/20 rounded-full animate-ping" />
                </div>

                {/* Floating Icons */}
                <div className="absolute -left-8 top-1/4 animate-float">
                  <div className="p-3 bg-white dark:bg-zinc-800 rounded-full shadow-lg border border-zinc-200 dark:border-zinc-700">
                    <Zap className="w-5 h-5 text-yellow-500" />
                  </div>
                </div>

                <div
                  className="absolute -right-8 bottom-1/4 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="p-3 bg-white dark:bg-zinc-800 rounded-full shadow-lg border border-zinc-200 dark:border-zinc-700">
                    <Code className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
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
      `}</style>
    </section>
  );
}
