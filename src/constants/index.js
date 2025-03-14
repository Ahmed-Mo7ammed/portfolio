import {

  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
Restaurant01,
  git,
  toDo,
  evocommerec,
  evo,
  horizon,
  medilab,
  coffo,
  meta,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [


  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 
 

  {
    name: "git",
    icon: git,
  },

];

const experiences = [

  {
    title: " Front-End Developer",
    company_name: "horizon-dt",
    icon: horizon,
    iconBg: "#E6DEDD",
    date: "August 2024 - jan-2025",
    points: [
   "Internship"
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "EvoTech",
    icon: evo,
    iconBg: "#383E56",
    date: "April 2024 - August 2024",
    points: [
     "Internship"
    ],

  },
  {
    title: "Front-End Developer",
    company_name: "Freelancing",
    icon: meta,
    iconBg: "#383E56",
    points: [
     "Freelancing"
    ],

  },
 
 
];

const testimonials = [
  
];

const projects = [
  {
    name: "E-commerce Project",
    description:
    "A modern E-commerce platform built with React, Radix UI, and Bootstrap, featuring a responsive design, dynamic shopping cart, and seamless user experience",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "reduxe",
        color: "green-text-gradient",
      },
    ],
    image: evocommerec,
    source_code_link: "https://commerc-wine.vercel.app/",
  },
  {
    name: "Medical Project",
    description:
    "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: medilab,
    source_code_link: "https://ahmed-mo7ammed.github.io/medicalRebo/",
  },
  {
    name: "Restaurant-01",
    description:
    " Resto is a modern restaurant website built with  Bootstrap, wow.js,  It offers a smooth and interactive user experience with stylish animations, responsive design, and seamless form handling for reservations and customer inquiries ",

    tags: [
    
     
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "wow.js",
        color: "pink-text-gradient",
      },
    ],
    image: Restaurant01,
    source_code_link: "https://ahmed-mo7ammed.github.io/Restaurant-01/",
  },
  {
    name: "coffo",
    description:
    " Coffo is a modern coffee shop website built with React, Bootstrap, Framer Motion, and Formik. It offers a smooth and interactive user experience with stylish animations, responsive design, and seamless form handling for customer inquiries ",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "formik",
        color: "pink-text-gradient",
      },
    ],
    image: coffo,
    source_code_link: "https://ahmed-mo7ammed.github.io/coffo/",
  },
  {
    name: "To Do List",
    description:
"To Do List",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind Css",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: toDo,
    source_code_link: "https://ahmed-mo7ammed.github.io/todolist/",
  },
];

export { services, technologies, experiences, testimonials, projects };
