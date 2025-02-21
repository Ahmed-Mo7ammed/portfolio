import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  evo,
  horizon,
  medilab,
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
      " Developed a responsive and user-friendly medical web app using React.js and Bootstrap, focusing on clean UI, smooth navigation, state management, and real-time API integration.",
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
    name: "medilab",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
