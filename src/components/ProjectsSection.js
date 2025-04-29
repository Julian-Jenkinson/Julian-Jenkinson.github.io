import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, Stack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { useColorModeValue } from "@chakra-ui/react";

const projects = [
  {
    title: "Graduate Nurse Job Match (2024)",
    type: "Job Platform",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    feature1Heading:"Pure CSS",
    feature1Description:"Plenty of CSS here!",
    feature2Heading:"Heading 2",
    feature2Description:"2nd description of something",
    feature3Heading:"Heading 3",
    feature3Description:"3rd description of something",
    summary:"This is a summary of this project",
    getImage1Src: () => require("../images/project1.1.png"),
    getImage2Src: () => require("../images/project1.1.png"),
    getImage3Src: () => require("../images/project1.1.png"),
    stack: ['PHP', 'HTML', 'CSS', 'JS', "SQL", "AWS", "Apache"],
    repo: "https://github.com/julian-jenkinson/Graduate_Nurse_Job_Match",
    //url: "https://lumewebdesign.com.au",

  },
  
  {
    title: "Lume Web Design (2025)",
    type: "Static Web Site",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    feature1Heading:"Pure CSS",
    feature1Description:"Lots of CSS here!",
    feature2Heading:"Heading 2",
    feature2Description:"2nd description of something",
    feature3Heading:"Heading 3",
    feature3Description:"3rd description of something",
    summary:"This is a summary of this project",
    getImage1Src: () => require("../images/project2.webp"),
    getImage2Src: () => require("../images/project2.webp"),
    getImage3Src: () => require("../images/project2.webp"),
    stack: ['HTML', 'CSS', 'LESS', 'JS', 'Netlify'],
    repo: "https://github.com/julian-jenkinson/Lume_Web_Design",
    url: "https://lumewebdesign.com.au",

  },
  {
    title: "My Portfolio (2025)",
    type: "Portfolio",
    description:
      "My personal porfolio website built in React and styled with Chakra UI  ",
    feature1Heading:"Heading 1",
    feature1Description:"1st description of something",
    feature2Heading:"Heading 2",
    feature2Description:"2nd description of something",
    feature3Heading:"Heading 3",
    feature3Description:"3rd description of something",
    summary:"This is a summary of this project",    
    getImage1Src: () => require("../images/project3.png"),
    getImage2Src: () => require("../images/project3.png"),
    getImage3Src: () => require("../images/project3.png"),
    stack: ['React JS', 'HTML', 'CSS', 'JS', 'Chakra UI'],
    repo: "https://github.com/julian-jenkinson/Julian-Jenkinson.github.io",
    url: "https://julian-jenkinson.github.io",

  },
];


const ProjectsSection = () => {
  return (
    <FullScreenSection as="section"
      id="projects-section"
      isDarkBackground
      p={10}
      alignItems="flex-start"
      spacing={8}
      bg={useColorModeValue("white", "black")} 
      color={useColorModeValue("black", "white")}
    >
      <Heading as="h1">
        Projects
      </Heading>
      <Stack
        spacing={8}
      >
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
            image1Src={project.getImage1Src()}
            image2Src={project.getImage2Src()}
            image3Src={project.getImage3Src()}
            stack={project.stack}
            repo={project.repo}
            url={project.url}
          />
        ))}
      </Stack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
