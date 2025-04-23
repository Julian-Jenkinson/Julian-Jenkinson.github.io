import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Stack } from "@chakra-ui/react";
import Card from "./Card";
import { useColorModeValue } from "@chakra-ui/react";

const projects = [
  {
    title: "Graduate Nurse Job Match",
    type: "Job Platform",
    description1:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    description2:
      "Heres some more infomration about this project",
    getImageSrc: () => require("../images/project1.1.png"),
    stack: ['PHP', 'HTML', 'CSS', 'JS'],
    repo: "https://github.com/catc4ke/lume",
    url: "https://lumewebdesign.com.au",

  },
  
  {
    title: "Lume Web Design",
    type: "Static Web Site",
    description1:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    description2:
      "Heres some more infomration about this project",
    getImageSrc: () => require("../images/project2.webp"),
    stack: ['PHP', 'HTML', 'CSS', 'JS'],
    repo: "https://github.com/catc4ke/lume",
    url: "https://lumewebdesign.com.au",

  },
  {
    title: "My Portfolio",
    type: "Portfolio",
    description1:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    description2:
      "Heres some more infomration about this project",
    getImageSrc: () => require("../images/project3.png"),
    stack: ['React', 'HTML', 'CSS', 'JS', 'Chakra UI'],
    repo: "https://github.com/catc4ke/lume",
    url: "https://lumewebdesign.com.au",

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
          <Card
            key={project.title}
            title={project.title}
            type={project.type}
            description1={project.description1}
            description2={project.description2}
            imageSrc={project.getImageSrc()}
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
