"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  PenLine,
  Sparkles,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";
import { projects } from "../lib/utils";

const highlightIcons: Record<string, LucideIcon> = {
  reviews: Star,
  blogs: PenLine,
  recommendations: Sparkles,
  community: Users,
};

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const project = projects.find((p) => p.featured) ?? projects[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!project) return null;

  const host = new URL(project.liveUrl).host;

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900"
    >
      {/* Soft static background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-primary-400/10 to-purple-400/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl"
      />

      <div
        className={`relative z-10 mx-auto max-w-7xl transition-all duration-700 ease-out motion-reduce:transition-none ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              The Ultimate Project
            </span>
          </h2>
          <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            The one that brings everything together: a polished frontend,
            authentication, and a real database behind it.
          </p>
        </div>

        {/* Spotlight */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Screenshot in a browser frame */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live site`}
            className="group relative block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 lg:col-span-7"
          >
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary-500/30 via-purple-500/20 to-pink-500/30 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-900">
              <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-xs text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                  {host}
                </span>
                <ExternalLink
                  size={14}
                  className="text-zinc-400 transition-colors group-hover:text-primary-600"
                />
              </div>
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.image}
                  alt={`${project.title} homepage`}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </a>

          {/* Details */}
          <div className="lg:col-span-5">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-700 dark:text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Live and in production
            </div>

            <h3 className="mb-3 text-4xl font-bold md:text-5xl">
              {project.title}
            </h3>
            <p className="mb-5 text-lg font-medium text-primary-600 dark:text-primary-400">
              {project.tagline}
            </p>
            <p className="mb-8 max-w-prose leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>

            <ul className="mb-8 grid gap-5 sm:grid-cols-2">
              {project.highlights.map((item) => {
                const Icon = highlightIcons[item.icon] ?? Sparkles;
                return (
                  <li key={item.title} className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block font-semibold">{item.title}</span>
                      <span className="block text-sm leading-snug text-zinc-600 dark:text-zinc-400">
                        {item.description}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mb-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              Visit {project.title}
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
