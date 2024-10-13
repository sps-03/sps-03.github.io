import cusatImage from "../assets/education-cusat.jpg";
import iitmImage from "../assets/education-iitm.jpg";
import chatAppImage from "../assets/project-chat-app.jpg";
import graphImage from "../assets/project-dynamic-graphs.jpg";
import portfolioImage from "../assets/project-portfolio.jpg";
import sentenceSimilarityImage from "../assets/project-sentence-similarity.jpg";
import swiftTyperImage from "../assets/project-swift-typer.jpg";
import broadcomImage from "../assets/work-broadcom.jpg";
import visaImage from "../assets/work-visa.jpg";

export const education = [
  {
    id: 1,
    degree: "M.Tech in Computer Science",
    university: "IIT Madras",
    startDate: "2020",
    endDate: "2022",
    description: [
      "Specialized in dynamic graph algorithms & CUDA programming",
      "Awarded the Prakash Arora Prize for highest CGPA in first year",
      "Recognized with the Star Teaching Assistant Award for outstanding contributions",
    ],
    image: iitmImage,
  },
  {
    id: 2,
    degree: "B.Tech in Computer Science",
    university: "School of Engineering, CUSAT",
    startDate: "2014",
    endDate: "2018",
    description: ["Graduated with first class, focusing on data structures, algorithms, and web development"],
    image: cusatImage,
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Visa",
    startDate: "June, 2022",
    endDate: "August, 2023",
    description: [
      "Played a pivotal role in the DCM backend team, focusing on addressing security findings",
      "Collaborated closely with security engineers to detect, analyze, and rectify vulnerabilities in the application",
      "Employed SAST and DAST tools for comprehensive security assessments",
    ],
    image: visaImage,
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "Visa",
    startDate: "May, 2021",
    endDate: "July, 2021",
    description: [
      "Implemented robust integration testing utilizing TestContainers",
      "Successfully replaced the H2 database with a MySQL container, enhancing the developer experience",
    ],
    image: visaImage,
  },
  {
    id: 3,
    title: "Automation Engineer",
    company: "Broadcom",
    startDate: "June, 2018",
    endDate: "November, 2018",
    description: [
      "Contributed to the WLAN Automation Team, actively involved in developing and automating test cases",
      "Leveraged Python for automation, ensuring the efficiency and accuracy of test case execution",
    ],
    image: broadcomImage,
  },
];

export const projects = [
  {
    id: 1,
    title: "Chat App with MERN Stack",
    description:
      "Developed a real-time chat application using Node.js, React, Express.js, MongoDB, and Socket.IO, with responsive design implemented through Tailwind CSS. The app supports instant messaging and dynamic updates across users.",
    image: chatAppImage,
    technologies: ["Node.js", "React", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS"],
    githubLink: "replace link XXXXX",
    liveLink: "replace link XXXXX",
  },
  {
    id: 2,
    title: "Dynamic Graph Algorithms for GPU",
    description:
      "Developed a CUDA-based solution for efficient processing of dynamic graphs, later integrating it into the Starplat DSL.",
    image: graphImage,
    technologies: ["C++", "CUDA", "Graph Algorithms"],
    githubLink: "https://github.com/sps-03/MTP",
  },
  {
    id: 3,
    title: "Swift Typer App",
    description:
      "Developed a sleek and interactive typing app using React, TypeScript, Tailwind CSS, and Framer Motion for a responsive and animated user experience, focusing on enhancing typing speed and accuracy.",
    image: swiftTyperImage,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "replace link XXXXX",
    liveLink: "replace link XXXXX",
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
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/sps-03/sps-03.github.io",
    liveLink: "https://sps-03.github.io/",
  },
];
