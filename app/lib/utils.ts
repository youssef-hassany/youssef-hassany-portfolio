import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const projects = [
  {
    id: 2,
    title: "HatComics",
    tagline: "A social home for comic book fans.",
    description:
      "HatComics is a full-stack web application built to connect comic book enthusiasts through personalized recommendations and interactive content. The platform supports a wide range of features, including comic reviews, user-generated blogs, and a social layer to engage with valuable community members.",
    highlights: [
      {
        icon: "reviews",
        title: "Comic reviews",
        description: "Rate and review the comics you read.",
      },
      {
        icon: "blogs",
        title: "User-generated blogs",
        description: "Readers publish their own posts and share their takes.",
      },
      {
        icon: "recommendations",
        title: "Personalized recommendations",
        description: "Suggestions shaped around each reader's taste.",
      },
      {
        icon: "community",
        title: "Social layer",
        description: "Engage with the most valuable members of the community.",
      },
    ],
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
    liveUrl: "https://hat-comics.com",
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
