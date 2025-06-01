import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/youssef-hassany",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/youssef-hassany-862a37284/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://x.com/ywsf_hassany",
      icon: Twitter,
      label: "Twitter",
    },
    {
      href: "mailto:youssefhassany22@gmail.com",
      icon: Mail,
      label: "Email",
    },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-zinc-200 dark:bg-zinc-950 text-white relative overflow-hidden">
      {/* Subtle web pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          className="w-full h-full"
        >
          <defs>
            <pattern
              id="web"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0 10 Q 10 0 20 10 T 40 10"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M 10 0 Q 10 10 10 20"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#web)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 py-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-red-600 via-blue-600 to-red-800 bg-clip-text text-transparent mb-4 block hover:from-red-500 hover:via-blue-500 hover:to-red-700 transition-all duration-300"
            >
              Youssef Hassany
            </Link>
            <p className="text-zinc-400 mb-6 max-w-sm">
              Frontend Developer passionate about creating beautiful,
              functional, and accessible web experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="p-2 bg-zinc-800 hover:bg-gradient-to-br hover:from-red-800 hover:to-blue-800 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-600 dark:text-gray-100 relative">
              Quick Links
              {/* Subtle spider web accent */}
              <span className="absolute -right-4 top-0 text-red-600/30 text-xs">
                🕸️
              </span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-red-400 transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -left-2 top-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-blue-600 group-hover:w-2 transition-all duration-300 -translate-y-1/2"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-600 dark:text-gray-100 relative">
              Get In Touch
              {/* Subtle spider web accent */}
              <span className="absolute -right-4 top-0 text-blue-600/30 text-xs">
                🕷️
              </span>
            </h3>
            <div className="space-y-2 text-zinc-400">
              <p>Egypt</p>
              <a
                href="mailto:youssefhassany22@gmail.com"
                className="hover:text-red-400 transition-colors duration-300 block"
              >
                youssefhassany22@gmail.com
              </a>
              <a
                href="tel:+201226647915"
                className="hover:text-blue-400 transition-colors duration-300 block"
              >
                +20 122 6647-915
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 pt-8 pb-4 relative">
          {/* Subtle web line decoration */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-red-600/50 via-blue-600/50 to-red-600/50"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400 text-sm">
              © {currentYear} Youssef Hassany. All rights reserved.
            </p>
            <p className="text-zinc-400 text-sm flex items-center gap-1">
              Made with{" "}
              <Heart size={16} className="text-red-500 animate-pulse" /> using
              Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
