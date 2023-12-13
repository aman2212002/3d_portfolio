import {
    mobile,
    backend,
   
    web,
    javascript,
   
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
   
    project,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets/assets";
  
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
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UI / UX Designer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
    
  ];
  
  const experiences = [
    {
      title: "Centralized Healthcare Architecture",
      company_name: "React.js, Bootstrap, Material-UI, Firebase",
      icon: project,
      iconBg: "#383E56",
      date: "Feb 2023 - May 2023",
      points: [
        "Created a website for AI-powered healthcare platform integrating 30+ ML models for precise disease diagnosis.",
        "Collaborating with team including designers, machine learning model developers, and other developers to create high-quality products.",
        "It includes various features like online appointment booking system, live conferencing with doctors and model that can diagnose accurately upto 80 to 90 percent.",
        "It also has centralised record system that can store your past medical records as well as nlp based priscription interpretor",
      ],
    },
    {
      title: "RPAISLATE",
      company_name: "React.js, Bootstrap, Material-UI",
      icon: project,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - Dec 2021",
      points: [
        "The system which has capability of converting a typical classroom into smartclassroom. ",
        "It has manything like dual projector system, attandance taking system,rpai tablets for students and Website which contains full study material.",
        "It offers a cost-saving solution, being 70% more affordable compared to competitors in the market.",
        "This project lead our team to win the national level Smart India Hackathon in 2021",
      ],
    },
    {
      title: "Portfolio",
      company_name: "vite.js, Tailwind css, three.js",
      icon: project,
      iconBg: "#383E56",
      date: "oct 2023 - nov 2023",
      points: [
        "Developed a portfolio to showcase my skills",
        "Done individually and tells about me and my Skills which i own",
        
      ],
    },
   
  ];
  
  
  
  const projects = [
    {
      name: "Centralized Healthcare Architecture",
      description:
        "Web based health care architecure system helps your to diagnose, verify, book a doctor and many more",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Fire-base",
          color: "green-text-gradient",
        },
        {
          name: "Material-UI",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/REMEAITREE",
    },
    {
      name: "together",
      description:
        "All purpose web application for college students where they can save notes, make timetables and some other important task at the same time",
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
      source_code_link: "https://github.com/aman2212002/together",
    },
    {
      name: "RPaislate",
      description:
        "A System to enhance the education system by providing some good features like dual projector, attandance taking system",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "machine learning model",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/The-RPAISlate",
    },
  ];
  
  export { services, technologies, experiences, projects };