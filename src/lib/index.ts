import { StaticImageData } from "next/image";
import Projecify from "@/assets/Projects/Projecify.png";
import HealthOptima from "@/assets/Projects/Health Optima.png";
import TheFirstAid from "@/assets/Projects/The First Aid.png";
import AnuvaadSangam from "@/assets/Projects/Anuvaad Sangam.png";
import Xenia from "@/assets/Projects/Xenia.png";
import Commune from "@/assets/Projects/Commune.png";
import Game2408 from "@/assets/Projects/2048 Game.png";
import ColorHexGame from "@/assets/Projects/Colox Hex Guessr.png";
import ReactQuiz from "@/assets/Projects/React Quiz App.png";

export interface IProject {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  techStack: string[];
  projectType: "individual" | "team";
  teammates: {
    name: string;
    role: string;
    social?: string;
    platform?: "github" | "linkedin" | "twitter";
  }[];
  scale: "mini" | "medium" | "capstone";
  status: "ongoing" | "complete" | "beta" | "deprecated";
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured?: boolean;
}

export const projects: IProject[] = [
  {
    id: 1,
    name: "Projecify",
    description:
      "A comprehensive project management platform with task tracking, team collaboration, and progress monitoring features. Built to streamline workflow and enhance productivity.",
    image: Projecify,
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "UploadThing",
      "Framer Motion",
      "NextAuth",
    ],
    projectType: "individual",
    teammates: [],
    scale: "capstone",
    status: "complete",
    githubUrl: "https://github.com/dipesh/projecify",
    liveUrl: "https://projecify-demo.vercel.app",
    category: "Project Management",
    featured: true,
  },
  {
    id: 2,
    name: "Health Optima",
    description:
      "A comprehensive healthcare application featuring healthcare blogs (user-contributed), water tracker, sleep tracker, task management, and various health monitoring tools for optimal wellness.",
    image: HealthOptima,
    techStack: [
      "Next.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "React Quill",
      "Framer Motion",
      "Clerk",
    ],
    projectType: "team",
    teammates: [
      {
        name: "Dipesh Ranjan",
        role: "Full Stack Developer",
        social: "https://github.com/dipeshranjan",
        platform: "github",
      },
      {
        name: "Isheta Aggarwal",
        role: "Frontend & UI/UX Designer",
        social: "https://linkedin.com/in/isheta-aggarwal",
        platform: "linkedin",
      },
    ],
    scale: "capstone",
    status: "ongoing",
    githubUrl: "https://github.com/dipesh/health-optima",
    category: "Healthcare",
    featured: false,
  },
  {
    id: 3,
    name: "2048 Game",
    description:
      "A modern implementation of the classic 2048 puzzle game built to understand and implement key Data Structures and Algorithms concepts through interactive gameplay.",
    image: Game2408,
    techStack: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Event Listeners",
      "Lodash",
    ],
    projectType: "individual",
    teammates: [],
    scale: "mini",
    status: "complete",
    githubUrl: "https://github.com/dipesh/2048-game",
    liveUrl: "https://2048-game-dipesh.netlify.app",
    category: "Game",
    featured: false,
  },

  {
    id: 4,
    name: "Xenia",
    description:
      "A community-based social media platform featuring real-time chat, document sharing, collaborative canvas drawing, and comprehensive social networking capabilities.",
    image: Xenia,
    techStack: [
      "Next.js",
      "TurboRepo",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
      "Cloudinary",
      "ExcalidrawSDK",
      "JWT",
    ],
    projectType: "team",
    teammates: [
      {
        name: "Dipesh Ranjan",
        role: "Full Stack Developer",
        social: "https://github.com/dipeshranjan",
        platform: "github",
      },
      {
        name: "Isheta Aggarwal",
        role: "Frontend & UI/UX Designer",
        social: "https://linkedin.com/in/isheta-aggarwal",
        platform: "linkedin",
      },
    ],
    scale: "capstone",
    status: "beta",
    githubUrl: "https://github.com/dipesh/xenia",
    category: "Social Platform",
    featured: false,
  },
  {
    id: 5,
    name: "Commune",
    description:
      "A real-time chat application supporting both one-to-one and group conversations with modern messaging features and seamless user experience.",
    image: Commune,
    techStack: [
      "Next.js",
      "MongoDB",
      "Headless UI",
      "NextAuth",
      "Pusher",
      "Cloudinary",
    ],
    projectType: "individual",
    teammates: [],
    scale: "medium",
    status: "complete",
    githubUrl: "https://github.com/dipesh/commune",
    liveUrl: "https://commune-app.vercel.app",
    category: "Communication",
    featured: false,
  },
  {
    id: 6,
    name: "Color Hex Guessr",
    description:
      "An interactive color guessing game where players identify hex values of displayed colors. Features Wordle-style feedback with directional arrows indicating if guessed values are higher or lower.",
    image: ColorHexGame,
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    projectType: "individual",
    teammates: [],
    scale: "mini",
    status: "complete",
    githubUrl: "https://github.com/dipesh/color-hex-guessr",
    liveUrl: "https://color-hex-guessr.vercel.app",
    category: "Game",
    featured: false,
  },
  {
    id: 7,
    name: "The First Aid",
    description:
      "An emergency hospital application for quick emergency handling, rapid form submissions, appointment management, and consent form processing with secure MPIN authentication mechanism.",
    image: TheFirstAid,
    techStack: [
      "Next.js",
      "Clerk",
      "Tailwind CSS",
      "Framer Motion",
      "Nodemailer",
    ],
    projectType: "team",
    teammates: [
      {
        name: "Dipesh Ranjan",
        role: "Full Stack Developer",
        social: "https://github.com/dipeshranjan",
        platform: "github",
      },
      {
        name: "Isheta Aggarwal",
        role: "UI/UX Designer",
        social: "https://linkedin.com/in/isheta-aggarwal",
        platform: "linkedin",
      },
      {
        name: "Kislay Gupta",
        role: "Frontend Developer",
        social: "https://github.com/kislaygupta",
        platform: "github",
      },
      {
        name: "Ankit Panigrahi",
        role: "Research Analyst",
        social: "https://linkedin.com/in/ankit-panigrahi",
        platform: "linkedin",
      },
    ],
    scale: "capstone",
    status: "complete",
    githubUrl: "https://github.com/dipesh/the-first-aid",
    liveUrl: "https://first-aid-app.netlify.app",
    category: "Healthcare",
    featured: false,
  },
  {
    id: 8,
    name: "Anuvaad Sangam",
    description:
      "A cross-language chat application enabling users to communicate in their native language with real-time translation capabilities. Note: This project has been deprecated.",
    image: AnuvaadSangam,
    techStack: [
      "Next.js",
      "Express",
      "MongoDB",
      "Clerk",
      "Google Translation API",
    ],
    projectType: "team",
    teammates: [
      {
        name: "Dipesh Ranjan",
        role: "Full Stack Developer",
        social: "https://github.com/dipeshranjan",
        platform: "github",
      },
      {
        name: "Isheta Aggarwal",
        role: "UI/UX Designer",
        social: "https://linkedin.com/in/isheta-aggarwal",
        platform: "linkedin",
      },
      {
        name: "Rajat Srivastava",
        role: "Backend Developer",
        social: "https://github.com/rajat-srivastava",
        platform: "github",
      },
    ],
    scale: "medium",
    status: "deprecated",
    githubUrl: "https://github.com/dipesh/anuvaad-sangam",
    category: "Translation",
    featured: false,
  },

  {
    id: 9,
    name: "React Quiz App",
    description:
      "An interactive quiz application built with React featuring multiple categories, timer functionality, and score tracking with detailed analytics.",
    image: ReactQuiz,
    techStack: ["React", "Context API", "React Router", "CSS Modules"],
    projectType: "individual",
    teammates: [],
    scale: "mini",
    status: "complete",
    githubUrl: "https://github.com/dipesh/react-quiz-app",
    liveUrl: "https://react-quiz-app-dipesh.netlify.app",
    category: "Educational",
    featured: false,
  },
];
