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
import mongo from './mongodb.png';
import data from './sdms.png';
import cropio from './cropio.png';
import skillbridge from './skillbridge.png';
import cropio_demo from './cropio demo.png';
import kaggleml from './kaggle ml.png';
import react from './react.png';
import se17 from './java se 17.jpg';
import reactjs from './react js.jpg';
import nptel from './nptel.png';
import react_js from './react_cer.png';
import four from './4.png';

export const certifications = [
  {
    title: "ORACLE - Java SE 17 Developer",
    img: se17,
    explanation: "This achievement reflects my strong understanding of Java SE 17 features, object-oriented programming, and building robust, scalable applications.",
  },
  {
    title: "React.js Developer",
    img: react_js,
    explanation: "Certified React JS Developer from Scaler with expertise in building scalable, dynamic web applications.Proficient in modern React concepts including hooks, state management, and performance optimization.",
  },
  {
    title: "Cisco Networking Certification",
    img: cisco,
    explanation: "Certified in foundational networking principles including routing, switching, and network protocols.",
  },
  {
    title: "NPTEL - Responsible & Safe AI Systems",
    img: nptel,
    explanation: "Certified in Responsible and Safe AI Systems by NPTEL.Understood key principles of ethical, safe, and trustworthy AI development.",
  },
  {
    title: "Scaler - React JS",
    img: reactjs,
    explanation: "Completed React JS certification from Scaler with practical experience in frontend development.Skilled in building responsive and interactive web applications.",
  },
  {
    title: "Introduction To Machine Learning",
    img: kaggleml,
    explanation: "This certificate showcases practical hands-on skills, from basic data exploration to advanced topics like random forests and model competition workflows.",
  },
  {
    title: "Java Basics Certification",
    img: java,
    explanation: "Completed the Java Basics course covering core concepts like OOP, syntax, and basic programming constructs.",
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



export const project = [
  {
    img: cropio_demo, 
    type: 'Cropio - Full Stack',
    explanation:
      'AI-driven sustainable agriculture platform using a Multi-Agent System. Empowers farmers with crop disease detection, yield prediction, and crop recommendations while connecting them directly to dealers/buyers. Promotes fair pricing, transparency, and data-driven decisions through smart ML models and a connected ecosystem.',
    link: 'https://cropioai.vercel.app',
  },
  {
    img:four, 
    type: 'SLOIS - Full Stack',
    explanation:
      'AI/ML-powered MERN stack application predicting semester outcomes using student academic data. Admin manages students, staff, and records via CRUD operations, while students securely view personalized results through a dashboard.',
    link: 'https://slois.vercel.app',
  },
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
    link: 'cropioai.vercel.app',
  },
  {
    img: skillbridge, 
    type: 'SkillBridge - Figma Design',
    explanation:
      'SkillBridge Figma design: A comprehensive UI/UX design prototype for the SkillBridge learning platform created using Figma.',
    link: 'https://www.figma.com/design/Fow0E0iu0rwdz06YWiHZf7/Skillbridge-online?m=auto&t=D0qqdTQL1yAcwD0B-6',
  },
  {
    img: cropio, 
    type: 'Cropio - Figma Design',
    explanation:
      'Cropio Figma design: A UI/UX prototype focusing on sustainable agriculture solutions designed in Figma to visualize user flow and interface elements.',
    link: 'https://www.figma.com/design/oKPtFqVasv58Rg51hx4gOJ/Corpio?m=auto&t=D0qqdTQL1yAcwD0B-6'
  },
  
];
