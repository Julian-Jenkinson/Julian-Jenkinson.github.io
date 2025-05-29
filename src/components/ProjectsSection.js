import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, SimpleGrid, Box } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { useColorModeValue } from "@chakra-ui/react";

const projects = [
  {
    title: "Straight-UI (IN DEVELOPMENT)",
    type: "React UI-Library",
    description:
      "Straight-UI is a modern, React-based UI component library built for fast, flexible development in both TypeScript and JavaScript projects.",
    feature1Heading:"Storybook",
    feature1Description:"Utilizing Storybook to visually present and test each component in isolation, enabling a better development experience and richer documentation.",
    feature2Heading:"Early access via NPM",
    feature2Description: "Straight-UI is available for installation via NPM. Please note this is an alpha release with experimental and limited components",
    feature3Heading:"TypeScript and JavaScript",
    feature3Description:"Built in TypeScript and fully compatible with JavaScript projects.",
    summary:"Updates coming soon — check back shortly!",
    getImage1Src: () => require("../images/project0.1.png"),
    //getImage2Src: () => require("../images/project1.2.png"),
    //getImage3Src: () => require("../images/project1.3.png"),
    stack: ['React', 'TS', 'JS', 'Storybook', 'NPM', "Rollup", "Vite"],
    repo: "https://github.com/julian-jenkinson/Straight-UI",
    url: "https://Julian-Jenkinson.github.io/Straight-UI/",

  },
  {
    title: "Graduate Nurse Job Match (2024)",
    type: "Job Platform",
    description:
      "Job matching platform for nursing and midwifery graduates with a focus on regional and rural Australia. Create a profile, fill in your job preferences and get matches that suit you.",
    feature1Heading:"Dynamic Web Application",
    feature1Description:"Dynamic web application powered by PHP and SQL. This app will search the jobs database and match you with job opportunities that suit you",
    feature2Heading:"GIS Integration",
    feature2Description:"Map assisted job search powered by Google Maps API",
    feature3Heading:"Chatbot",
    feature3Description:"Integrated chat bot for guided interaction. Utilising Google Dialogflow",
    summary:"A complete job search platform allowing employers to list jobs and graduates to find them. Plus a few extra user-friendly enhancements designed to streamline the process and help job seekers find more opportunities that suit them.",
    getImage1Src: () => require("../images/project1.1.png"),
    getImage2Src: () => require("../images/project1.2.png"),
    getImage3Src: () => require("../images/project1.3.png"),
    stack: ['PHP', 'HTML', 'CSS', 'JS', "SQL", "AWS", "NGINX"],
    repo: "https://github.com/julian-jenkinson/Graduate_Nurse_Job_Match",
    //url: "https://URL HERE",

  },
  
  {
    title: "Lume Web Design (2025)",
    type: "Static Web Site",
    description:
      "A website I developed as a side project. My intention was to master the fundamentals of web development using pure HTML, CSS (LESS) and JS.",
    feature1Heading:"Fully responsive design",
    feature1Description:"A mobile first design that looks great accross all screen sizes.",
    feature2Heading:"Built for performance 🔥️",
    feature2Description:"Perfect scores on Googles lighthouse test promotes higher search rankings and increased user satisfaction.",
    feature3Heading:"SEO Ready",
    feature3Description: "Optimized images, fast load times, relevant keywords, best accessibility practices, and structured meta tags work together to boost search engine visibility and rankings. This site is ready to go.",
    getImage1Src: () => require("../images/project2.1.png"),
    getImage2Src: () => require("../images/project2.2.png"),
    stack: ['HTML', 'CSS', 'LESS', 'JS', 'Netlify'],
    repo: "https://github.com/julian-jenkinson/Lume_Web_Design",
    url: "https://lumewebdesign.com.au",

  },
  {
    title: "My Portfolio (2025)",
    type: "Portfolio",
    description:
      "My personal porfolio website built in React and styled with Chakra UI.",
    feature1Heading:"Built in React",
    feature1Description:"It covers all the core concepts of react, it's component driven, theres hooks, states, props, conditional rendering, event handling, a form using controlled components, and everthing else that makes a versatile React app.",
    feature2Heading:"Darkmode",
    feature2Description:"Save your eyes - Dark mode by default! Leveraging Chakra's dark mode greatness. Try it here ->",
    feature3Heading:"Buttery Interactions",
    feature3Description:"Utilizing Framer Motion to deliver smooth scrolling, swooshing popouts, and an overall springy, dynamic user experience.",
    summary:"Part portfolio, part sandbox — A place to code, learn, and sometimes break things!",    
    getImage1Src: () => require("../images/project3.1.png"),
    //getImage2Src: () => require("../images/project3.1.png"),
    getImage3Src: () => require("../images/project3.3.png"),
    stack: ['React', 'JS', 'Chakra UI', 'Formik', 'Framer-Motion'],
    repo: "https://github.com/julian-jenkinson/Julian-Jenkinson.github.io",
    url: "https://julian-jenkinson.github.io",

  },
];


const ProjectsSection = () => {
  return (
    <FullScreenSection as="section"
      id="projects-section"
      isDarkBackground
      pt={10}
      pb={6}
      alignItems="flex-center"
      margin="auto"
      spacing={8}
      bg={useColorModeValue("white", "black")} 
      color={useColorModeValue("black", "white")}
    >
      <Heading
        as="h1"
        textAlign="center"
        w="100%"
        fontWeight="900"
        fontSize="50"
        pb=".3em"
      >
        Projects
      </Heading>
      
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.map((project) => (
          <Box key={project.title} alignSelf="start">
            <ProjectCard
              key={project.title}
              title={project.title}
              type={project.type}
              description={project.description}
              feature1Heading={project.feature1Heading}
              feature1Description={project.feature1Description}
              feature2Heading={project.feature2Heading}
              feature2Description={project.feature2Description}
              feature3Heading={project.feature3Heading}
              feature3Description={project.feature3Description}
              summary={project.summary}
              image1Src={project.getImage1Src?.()}
              image2Src={project.getImage2Src?.()}
              image3Src={project.getImage3Src?.()}
              stack={project.stack}
              repo={project.repo}
              url={project.url}
            />
          </Box>
        ))}
      </SimpleGrid>
      
    </FullScreenSection>
  );
};

export default ProjectsSection;
