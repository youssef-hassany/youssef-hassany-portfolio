import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, TypeScript, and Prisma. Features include user authentication, payment processing, and admin dashboard.",
    image: "/images/project1.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://your-ecommerce-demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/images/project2.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://your-taskmanager-demo.com",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays current weather, forecasts, and interactive maps using various weather APIs.",
    image: "/images/project3.png",
    technologies: ["JavaScript", "CSS3", "Weather API", "Chart.js"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://your-weather-demo.com",
    featured: false,
  },
];

export const skills = [
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
