import java from './java_basic.png';
import cisco from './cisco.png';
import sql from './sql_basic.png';
import codechef from './codechef.png';
import c from './c program.png';
import java_logo from './java.png';
import python from './python.png';
import html from './html.jpg';
import css from './css.png';
import javascript from './javascript.jpg';
import node from './node.png';
import express from './express.png';
import figma from './figma.jpg';
import bootstrap from './bootstrap.png';
import github from './github.webp';
import mongo from './mongodb.jpg';
import data from './sdms.png';
import cropio from './cropio.png';
import skillbridge from './skillbridge.png';
import react from './react.png';

export const certifications = [
  {
    title: "Java Basics Certification",
    img: java,
    explanation: "Completed the Java Basics course covering core concepts like OOP, syntax, and basic programming constructs.",
  },
  {
    title: "Cisco Networking Certification",
    img: cisco,
    explanation: "Certified in foundational networking principles including routing, switching, and network protocols.",
  },
  {
    title: "SQL Basics Certification",
    img: sql,
    explanation: "Gained proficiency in SQL querying, database management, and data manipulation.",
  },
  {
    title: "CodeChef Problem Solving",
    img: codechef,
    explanation: "Active participant on CodeChef platform with a focus on problem-solving and competitive programming.",
  },
];

export const skills = [
  {
    category: 'Programming Skills',
    skills: [
      {
        image: c,
        title: 'C Programming',
        explanation: 'A powerful general-purpose programming language used for system programming and embedded systems.',
      },
      {
        image: java_logo,
        title: 'Java',
        explanation: 'A versatile, object-oriented programming language widely used for building cross-platform applications.',
      },
      {
        image: python,
        title: 'Python',
        explanation: 'A high-level programming language known for its readability and vast ecosystem, ideal for scripting, automation, and AI.',
      },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      {
        image: html,
        title: 'HTML',
        explanation: 'The standard markup language for creating web pages and web applications.',
      },
      {
        image: css,
        title: 'CSS',
        explanation: 'Stylesheet language used to describe the presentation of a document written in HTML.',
      },
      {
        image: javascript,
        title: 'JavaScript',
        explanation: 'A scripting language that enables interactive web pages and dynamic content.',
      },
    ],
  },
  {
    category: 'Library',
    skills: [
      {
        image: react,
        title: 'React.js',
        explanation: 'A powerful JavaScript library for building dynamic and responsive user interfaces. It enables the creation of reusable UI components, improving development efficiency and user experience in web applications.',
      },
    ],
  },
  {
    category: 'Backend',
    skills: [
      {
        image: node,
        title: 'Node.js',
        explanation: 'A JavaScript runtime built on Chrome’s V8 engine for server-side development.',
      },
      {
        image: express,
        title: 'Express.js',
        explanation: 'A minimal and flexible Node.js web application framework for building APIs and web applications.',
      },
    ],
  },
  {
    category: 'Framework',
    skills: [
      {
        image: bootstrap,
        title: 'Bootstrap',
        explanation: 'A popular CSS framework for building responsive and mobile-first websites quickly.',
      },
    ],
  },
  {
    category: 'Database',
    skills: [
      {
        image: mongo,
        title: 'MongoDB',
        explanation: 'A NoSQL database known for its flexibility and scalability with JSON-like documents.',
      },
    ],
  },
  {
    category: 'Tools',
    skills: [
      {
        image: github,
        title: 'GitHub',
        explanation: 'A web-based platform for version control and collaborative software development using Git.',
      },
      {
        image: figma,
        title: 'Figma',
        explanation: 'A cloud-based design tool used for UI/UX design and prototyping.',
      },
    ],
  },
];

export const technicalSkills = [
  {
    category: "Programming Languages",
    skills: [
      {
        image: c,
        name: "C",
        shortExplanation: "Writing efficient low-level code for system programming, embedded systems, and performance-critical applications.",
      },
      {
        image: java_logo,
        name: "Java",
        shortExplanation: "Developing cross-platform, object-oriented applications with strong memory management and multi-threading capabilities.",
      },
      {
        image: python,
        name: "Python",
        shortExplanation: "Building versatile applications in web development, automation, and data science using Python's clean syntax and extensive libraries.",
      },
      {
        image: javascript,
        name: "JavaScript",
        shortExplanation: "Creating interactive web applications by integrating client-side logic and asynchronous features through dynamic scripting.",
      },
    ],
  },
  {
    category: "Frontend",
    skills: [
      {
        image: html,
        name: "HTML",
        shortExplanation: "Defining the structure and layout of web content using semantic elements to ensure accessibility and SEO optimization.",
      },
      {
        image: css,
        name: "CSS",
        shortExplanation: "Designing visually appealing and responsive interfaces with stylesheets, flexbox, grid systems, and animations.",
      },
      {
        image: javascript,
        name: "JavaScript",
        shortExplanation: "Implementing front-end interactivity, DOM manipulation, and event-driven behaviors to enhance user experiences.",
      },
      {
        image: bootstrap,
        name: "Bootstrap",
        shortExplanation: "Rapidly developing mobile-first, responsive websites using a component-based front-end framework with pre-built styles.",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        image: node,
        name: "Node.js",
        shortExplanation: "Building scalable server-side applications and APIs using JavaScript runtime built on Chrome's V8 engine.",
      },
      {
        image: express,
        name: "Express.js",
        shortExplanation: "Creating RESTful APIs with minimal configuration, middleware support, and efficient routing using the Express framework.",
      },
    ],
  },
  {
    category: "Database",
    skills: [
      {
        image: mongo,
        name: "MongoDB",
        shortExplanation: "Managing flexible, JSON-like data structures in a NoSQL environment to support scalable and high-performance applications.",
      },
    ],
  },
  {
    category: "Tools & Design",
    skills: [
      {
        image: figma,
        name: "Figma",
        shortExplanation: "Designing and prototyping UI/UX interfaces collaboratively, using vector tools and component systems for consistency.",
      },
      {
        image: github,
        name: "GitHub",
        shortExplanation: "Collaborating on software projects with version control, issue tracking, and continuous integration workflows using Git.",
      },
    ],
  },
];

export const project = [
  {
    img: data,
    type: 'Student Database Management - Full Stack',
    explanation:
      'A Full Stack Student Database Management System designed to manage student records efficiently. Built using the MERN stack, it includes CRUD functionalities, user authentication, and an intuitive UI.',
    link: 'https://github.com/Pradeep7007/student-database-management',
  },
  {
    img: skillbridge,
    type: 'SkillBridge - Frontend',
    explanation:
      'SkillBridge is a frontend-only online learning platform that offers both free and subscription-based courses. Developed using React.js and Bootstrap, it features a modern UI and responsive design.',
    link: 'https://skillbridge-learn.netlify.app/',
  },
  {
    img: cropio,
    type: 'Cropio - Frontend',
    explanation:
      'Cropio is a frontend AI-based sustainable agriculture platform. Built using React.js and Bootstrap, it showcases how AI can assist in smart farming practices through intuitive UI and responsive layouts.',
    link: 'https://github.com/Pradeep7007/student-database-management',
  },
  {
    img: skillbridge, // Can replace this with the actual Figma design image for SkillBridge
    type: 'SkillBridge - Figma Design',
    explanation:
      'SkillBridge Figma design: A comprehensive UI/UX design prototype for the SkillBridge learning platform created using Figma.',
    link: 'https://www.figma.com/design/Fow0E0iu0rwdz06YWiHZf7/Skillbridge-online?m=auto&t=D0qqdTQL1yAcwD0B-6',
  },
  {
    img: cropio, // Replace this with the actual Cropio Figma design image if you have one
    type: 'Cropio - Figma Design',
    explanation:
      'Cropio Figma design: A UI/UX prototype focusing on sustainable agriculture solutions designed in Figma to visualize user flow and interface elements.',
    link: 'https://www.figma.com/design/oKPtFqVasv58Rg51hx4gOJ/Corpio?m=auto&t=D0qqdTQL1yAcwD0B-6',
  },
];
