import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const projects = [
  {
    id: 1,
    title: "BISHell",
    description:
      "An interactive portal for Business Information System 'BIS' students at the Faculty of Commerce in suez canal university, offering course overviews, assignments, quizzes, Q&A, and a seamless chat experience. Stay connected, stay organized, and access everything you need for your academic term in one place.",
    image: "/images/project1.png",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "CSS",
      "Zustand",
      "Socket.io",
    ],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://bishell.online/",
    featured: true,
  },
  {
    id: 2,
    title: "FindMyCash",
    description:
      "a friendly cash tracker that will help you keep track with all your purchases",
    image: "/images/project2.png",
    technologies: ["React", "Tailwind", "recharts", "Redux Toolkit"],
    githubUrl: "https://github.com/youssefHassany/find-my-cash",
    liveUrl: "https://find-my-cash.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "E-Commerce",
    description:
      "an E-commerce website with react, you can search products, see products data, add products to cart nad more...",
    image: "/images/project3.png",
    technologies: [
      "Next.JS",
      "Typescript",
      "Tailwind CSS",
      "Zustand",
      "ShadCN",
    ],
    githubUrl: "https://github.com/youssefHassany/e-commerce-react",
    liveUrl: "https://e-commerce-react-tawny.vercel.app/",
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
