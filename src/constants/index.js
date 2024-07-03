import { Scaler, MCA, BCA, School } from "../assets/images/index";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  tailwindcss,
  project,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const educations = [
  {
    title: "Full Stack Development",
    institute_name: "Scaler",
    icon: Scaler,
    iconBg: "#accbe1",
    date: "August 2022 - August 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Master of Computer Applications",
    institute_name: "Dr. B. C. Roy Engineering College",
    icon: MCA,
    iconBg: "#fbc3bc",
    date: "Sept 2018 - Sept 2021",
    points: [
      "Developed and maintained web applications using Java, Spring Boot, and other related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality software products.",
      "Implemented and optimized database schemas using SQL and NoSQL databases.",
      "Participated in code reviews and provided constructive feedback to peers to improve code quality.",
      "Conducted research and developed projects on emerging technologies such as machine learning and artificial intelligence.",
    ],
  },
  {
    title: "Bachelor of Computer Applications",
    institute_name: "Burdwan Raj College",
    icon: BCA,
    iconBg: "#b7e4c7",
    date: "Aug 2015 - Aug 2018",
    points: [
      "Learned fundamental concepts of computer science including algorithms, data structures, and object-oriented programming.",
      "Developed basic web applications using HTML, CSS, JavaScript, and PHP.",
      "Gained hands-on experience in database management using MySQL.",
      "Worked on academic projects involving software development life cycle (SDLC) methodologies.",
    ],
  },
  {
    title: "School(12th)",
    institute_name: "Birbhum Zilla School",
    icon: School,
    iconBg: "#a2d2ff",
    date: "Apr 2015",
    points: [
      "Studied Computer Applications as a major subject, focusing on fundamental web development with HTML and CSS.",
      "Learned about logical reasoning and problem-solving using logic gates and Boolean algebra.",
      "Developed a foundational understanding of programming concepts.",
      "Participated in school-level coding competitions and tech events.",
      "Completed various projects and assignments that involved creating static websites and basic algorithms.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/souda0303",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/souvik-das-585854206/",
  },
];

export const projects = [
  {
    iconUrl: project, // Replace with actual URL or import for the icon/image
    theme: "btn-back-pink", // Choose a theme color based on your design
    name: "Kahani-Korner", // Project name
    description:
      "A responsive and interactive blog application frontend built using React.js, Framer Motion for animations, and Material-UI for a sleek user interface. Features include dynamic routing, animated transitions, and categorized blog posts with user-friendly navigation.", // Project description
    link: "https://github.com/souda0303/kahani--korner", // GitHub or project link
  },
  {
    iconUrl: project,
    theme: "btn-back-blue",
    name: "Arijit Singh Live Concert",
    description:
      "Frontend for a dynamic live concert website using Next.js for server-side rendering, Tailwind CSS for customizable styling, and Framer Motion for smooth animations. Includes event schedules, ticket booking interfaces, and artist profiles.",
    link: "https://github.com/souda0303/ArijitLiveConcert.Com",
  },
  {
    iconUrl: project,
    theme: "btn-back-orange",
    name: "Portfolio Card",
    description:
      "An interactive and visually appealing portfolio card created with HTML, CSS, and JavaScript. Features include hover effects, dynamic content rendering, and responsive design for seamless viewing on various devices.",
    link: "https://github.com/souda0303/MyPortfolio_card",
  },
  {
    iconUrl: project,
    theme: "btn-back-green",
    name: "Digital Clock",
    description:
      "A comprehensive digital clock application implemented using HTML, CSS, and JavaScript. Features include time zone selection, alarm functionalities, and customizable display options for date and time formats.",
    link: "https://github.com/souda0303/Digi-Clock",
  },
  {
    iconUrl: project,
    theme: "btn-back-black",
    name: "Portfolio Design",
    description:
      "A visually stunning portfolio design showcasing skills and projects using HTML, CSS, and JavaScript. Includes a creative layout, interactive elements, and showcases projects with detailed descriptions and links to GitHub repositories.",
    link: "https://github.com/souda0303/Portfolio",
  },
  {
    iconUrl: project,
    theme: "btn-back-yellow",
    name: "Password Generator",
    description:
      "Developed a secure and customizable password generator web application using React.js and Tailwind CSS. The application allows users to generate strong passwords with options for password length, character sets (including letters, numbers, and special characters), and complexity levels. Features include responsive design for seamless usability across devices, real-time password preview, and copy-to-clipboard functionality to simplify password management.",
    link: "https://github.com/souda0303/passwordGenerator",
  }
  
];
