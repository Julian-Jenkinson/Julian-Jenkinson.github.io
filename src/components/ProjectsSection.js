import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { useColorModeValue } from "@chakra-ui/react";

const projects = [
  {
    title: "Graduate Nurse Job Match (2024)",
    type: "Job Platform",
    description:
      "A Job matching platform matching employment opportunities to nursing and midwifery graduates with a focus on regional and rural Australia. Create a profile, fill in your job preferences and get matches that suit you.",
    feature1Heading:"Dynamic web application",
    feature1Description:"Dynamic web application powered by PHP and SQL. This app will search the jobs database and match you with job opportunities that suit you",
    feature2Heading:"GIS integration",
    feature2Description:"GIS map integration pulls jobs from the database and displays their location geographically. Users can search for jobs based on loaction - increasing user experience.",
    feature3Heading:"Chatbot",
    feature3Description:"User friendly chat bot for virtual assistance. Powered by Google Dialogflow",
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
    feature3Heading:"Projects",
    feature3Description:"See my latest projects. Check back soon - there's more in the works",
    summary:"Part portfolio, part digital sandbox — where I code, create, and occasionally break things for fun!",    
    getImage1Src: () => require("../images/project3.1.png"),
    //getImage2Src: () => require("../images/project3.1.png"),
    getImage3Src: () => require("../images/project3.3.png"),
    stack: ['React JS', 'HTML', 'CSS', 'JS', 'Chakra UI', 'Formik'],
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
      
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
        {projects.map((project) => (
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
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
