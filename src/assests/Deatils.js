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
import mongo from './mongodb.webp';

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


export const technicalSkills = [
  {
    category: "Programming Languages",
    skills: [
      {
        image: c,
        name: "C",
        shortExplanation: "Writing efficient low-level code for system programming, embedded systems, and performance-critical applications."
      },
      {
        image: java_logo,
        name: "Java",
        shortExplanation: "Developing cross-platform, object-oriented applications with strong memory management and multi-threading capabilities."
      },
      {
        image: python,
        name: "Python",
        shortExplanation: "Building versatile applications in web development, automation, and data science using Python's clean syntax and extensive libraries."
      },
      {
        image: javascript,
        name: "JavaScript",
        shortExplanation: "Creating interactive web applications by integrating client-side logic and asynchronous features through dynamic scripting."
      }
    ]
  },
  {
    category: "Frontend",
    skills: [
      {
        image: html,
        name: "HTML",
        shortExplanation: "Defining the structure and layout of web content using semantic elements to ensure accessibility and SEO optimization."
      },
      {
        image: css,
        name: "CSS",
        shortExplanation: "Designing visually appealing and responsive interfaces with stylesheets, flexbox, grid systems, and animations."
      },
      {
        image: javascript,
        name: "JavaScript",
        shortExplanation: "Implementing front-end interactivity, DOM manipulation, and event-driven behaviors to enhance user experiences."
      },
      {
        image: bootstrap,
        name: "Bootstrap",
        shortExplanation: "Rapidly developing mobile-first, responsive websites using a component-based front-end framework with pre-built styles."
      }
    ]
  },
  {
    category: "Backend",
    skills: [
      {
        image: node,
        name: "Node.js",
        shortExplanation: "Building scalable server-side applications and APIs using JavaScript runtime built on Chrome's V8 engine."
      },
      {
        image: express,
        name: "Express.js",
        shortExplanation: "Creating RESTful APIs with minimal configuration, middleware support, and efficient routing using the Express framework."
      }
    ]
  },
  {
    category: "Database",
    skills: [
      {
        image: mongo,
        name: "MongoDB",
        shortExplanation: "Managing flexible, JSON-like data structures in a NoSQL environment to support scalable and high-performance applications."
      }
    ]
  },
  {
    category: "Tools & Design",
    skills: [
      {
        image: figma,
        name: "Figma",
        shortExplanation: "Designing and prototyping UI/UX interfaces collaboratively, using vector tools and component systems for consistency."
      },
      {
        image: github,
        name: "GitHub",
        shortExplanation: "Collaborating on software projects with version control, issue tracking, and continuous integration workflows using Git."
      }
    ]
  }
];