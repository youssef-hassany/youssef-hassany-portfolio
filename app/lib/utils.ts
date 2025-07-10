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
    title: "HatComics",
    description:
      "HatComics is a full-stack web application built to connect comic book enthusiasts through personalized recommendations and interactive content. The platform supports a wide range of features, including comic reviews, user-generated blogs, and a social layer to engage with valuable community members.",
    image: "/images/hat-comics.png",
    technologies: [
      "Next.JS",
      "Typescript",
      "Tailwind CSS",
      "Zustand",
      "Clerk (auth)",
      "PostgreSQL",
      "Prisma",
    ],
    // githubUrl: "https://github.com/youssefHassany/e-commerce-react",
    liveUrl: "https://hatcomics.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "FindMyCash",
    description:
      "a friendly cash tracker that will help you keep track with all your purchases",
    image: "/images/project2.png",
    technologies: ["React", "Tailwind", "recharts", "Redux Toolkit"],
    githubUrl: "https://github.com/youssefHassany/find-my-cash",
    liveUrl: "https://find-my-cash.vercel.app/",
    featured: true,
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
