import {

  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,

  git,
  toDo,
  
  evo,
  horizon,
  medilab,
  coffo,
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
    title: "Front-End Developer",
    company_name: "horizon-dt",
    icon: horizon,
    iconBg: "#E6DEDD",
    date: "August 2024 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "EvoTech",
    icon: evo,
    iconBg: "#383E56",
    date: "Jan 2024 - August 2024",
    points: [
      " Designing and maintaining a CRM project while continuously improving its performance.",
      " Adding new features based on business needs and user requirements.",
      " Enhancing user experience by developing interactive and user-friendly interfaces.",
   "Ensuring integration with other systems and improving operational efficiency",
    ],

  },
 
];

const testimonials = [
  
];

const projects = [
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
