import { FaAws } from "react-icons/fa6";
import {
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLinux,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import chesterImage from "../assets/education-chester.jpg";
import cusatImage from "../assets/education-cusat.jpg";
import iitmImage from "../assets/education-iitm.jpg";
import chatAppImage from "../assets/project-chat-app.jpg";
import graphImage from "../assets/project-dynamic-graphs.jpg";
import portfolioImage from "../assets/project-portfolio.jpg";
import sentenceSimilarityImage from "../assets/project-sentence-similarity.jpg";
import swiftTyperImage from "../assets/project-swift-typer.jpg";
import broadcomImage from "../assets/work-broadcom.jpg";
import freelanceImage from "../assets/work-freelance.jpg";
import visaImage from "../assets/work-visa.jpg";

export const skills = [
  { id: 1, name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { id: 2, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { id: 3, name: "Python", icon: SiPython, color: "#3776AB" },
  { id: 4, name: "C++", icon: SiCplusplus, color: "#00599C" },
  { id: 5, name: "React", icon: SiReact, color: "#61DAFB" },
  { id: 6, name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { id: 7, name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { id: 8, name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { id: 9, name: "Vite", icon: SiVite, color: "#646CFF" },
  { id: 10, name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { id: 11, name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { id: 12, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { id: 13, name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { id: 14, name: "Redis", icon: SiRedis, color: "#DC382D" },
  { id: 15, name: "Prisma", icon: SiPrisma, color: "#FFFFFF" },
  { id: 16, name: "AWS", icon: FaAws, color: "#FF9900" },
  { id: 17, name: "Docker", icon: SiDocker, color: "#2496ED" },
  { id: 18, name: "Git", icon: SiGit, color: "#F05032" },
  { id: 19, name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { id: 20, name: "Linux", icon: SiLinux, color: "#FCC624" },
  { id: 21, name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { id: 22, name: "Jest", icon: SiJest, color: "#C21325" },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Freelance",
    startDate: "Sep, 2023",
    endDate: "Nov, 2024",
    description: [
      "Built and enhanced an admin dashboard and core platform features for a sports coaching marketplace connecting athletes with coaches, using React, Node.js, and MongoDB",
      "Developed a FastAPI and React-based ERP system for an aviation parts vendor and inventory management platform, handling vendor data and workflow tracking",
      "Built a MERN-based student record management system for a school client",
    ],
    image: freelanceImage,
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Visa",
    startDate: "Jun, 2022",
    endDate: "Aug, 2023",
    description: [
      "Rolled out service and configuration changes across production systems during a large-scale data centre migration, coordinating with cross-functional teams to ensure reliable deployments",
      "Identified and remediated security vulnerabilities using Black Duck, Checkmarx, and SonarQube, applying secure coding practices with the security engineering team",
      "Built an internal dashboard to track and visualise vulnerabilities across scanning tools, improving visibility and reducing remediation turnaround time",
    ],
    image: visaImage,
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "Visa",
    startDate: "May, 2021",
    endDate: "Jul, 2021",
    description: [
      "Set up integration testing using TestContainers, improving the reliability and consistency of test environments",
      "Migrated the testing setup from an in-memory H2 database to containerised MySQL, aligning test environments more closely with production",
    ],
    image: visaImage,
  },
  {
    id: 4,
    title: "Software Validation Engineer",
    company: "Broadcom",
    startDate: "Jun, 2018",
    endDate: "Nov, 2018",
    description: [
      "Automated WLAN test cases using Python within an internal test automation framework",
      "Reduced manual testing effort and improved test execution efficiency",
    ],
    image: broadcomImage,
  },
];

export const education = [
  {
    id: 1,
    degree: "M.Sc in Cyber Security",
    university: "University of Chester",
    startDate: "Jan, 2025",
    endDate: "Feb, 2026",
    description: [
      "Graduated with Distinction, focusing on penetration testing, web systems, and software exploitation",
      "Built practical expertise in identifying, analysing, and mitigating cybersecurity threats and secure system design",
      "Served as Student Voice Representative, presenting student feedback to faculty for academic and welfare improvements",
    ],
    image: chesterImage,
  },
  {
    id: 2,
    degree: "M.Tech in Computer Science",
    university: "IIT Madras",
    startDate: "Aug, 2020",
    endDate: "Jun, 2022",
    description: [
      "Graduated with a CGPA of 9.44, specialising in dynamic graph algorithms and CUDA programming",
      "Contributed to a patented Domain-Specific Language for graph processing",
      "Awarded the Prakash Arora Prize for highest CGPA in first year",
      "Recognised with the Star Teaching Assistant Award for outstanding contributions",
    ],
    image: iitmImage,
  },
  {
    id: 3,
    degree: "B.Tech in Computer Science",
    university: "School of Engineering, CUSAT",
    startDate: "Aug, 2014",
    endDate: "Jun, 2018",
    description: ["Graduated with a CGPA of 7.47, focusing on data structures, algorithms, and web development"],
    image: cusatImage,
  },
];

export const projects = [
  {
    id: 1,
    title: "Dynamic Graph Algorithms for GPU",
    description:
      "Engineered GPU-accelerated CUDA algorithms for dynamic graph processing as part of the Starplat DSL research project, enhancing computational efficiency for large-scale graph operations.",
    image: graphImage,
    technologies: ["C++", "CUDA", "Graph Algorithms"],
    githubLink: "https://github.com/sps-03/MTP",
  },
  {
    id: 2,
    title: "Swift Typer App",
    description:
      "Built an interactive typing speed app with real-time performance tracking and theme-switching, featuring a responsive, component-based UI with smooth Framer Motion animations for an engaging user experience.",
    image: swiftTyperImage,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/sps-03/swift-typer",
    liveLink: "https://sps-03.github.io/swift-typer/",
  },
  {
    id: 3,
    title: "Chat App with MERN Stack",
    description:
      "Architected a real-time messaging platform using Node.js, React, Express.js, MongoDB, and Socket.IO, combining WebSockets and REST APIs in an event-driven architecture with a responsive UI for low-latency communication between concurrent users.",
    image: chatAppImage,
    technologies: ["Node.js", "React", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS"],
    githubLink: "https://github.com/sps-03/connectify",
    liveLink: "https://connectify-6yua.onrender.com/",
  },
  {
    id: 4,
    title: "Sentence Similarity Checking",
    description: "Implemented a Siamese LSTM model to compare sentence similarity.",
    image: sentenceSimilarityImage,
    technologies: ["Python", "Keras", "NLP", "LSTM"],
    githubLink: "https://github.com/sps-03/sentance-similarity",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Developed a dynamic and responsive portfolio website using React, Tailwind CSS, and Framer Motion to showcase projects and skills with smooth animations and a modern design.",
    image: portfolioImage,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Three.js", "Web3Forms"],
    githubLink: "https://github.com/sps-03/sps-03.github.io",
    liveLink: "https://sps-03.github.io/",
  },
];
