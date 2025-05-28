import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/yourusername",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/yourusername",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com/yourusername",
      icon: Twitter,
      label: "Twitter",
    },
    {
      href: "mailto:john.doe@example.com",
      icon: Mail,
      label: "Email",
    },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <footer className="bg-zinc-900 dark:bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 py-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-4 block"
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
                    className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
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
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-zinc-400">
              <p>San Francisco, CA</p>
              <a
                href="mailto:john.doe@example.com"
                className="hover:text-white transition-colors"
              >
                john.doe@example.com
              </a>
              <a
                href="tel:+1234567890"
                className="hover:text-white transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400 text-sm">
              © {currentYear} Youssef Hassany. All rights reserved.
            </p>
            <p className="text-zinc-400 text-sm flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500" /> using
              Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
