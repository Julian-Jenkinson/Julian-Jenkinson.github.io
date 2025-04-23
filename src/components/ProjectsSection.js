import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Stack } from "@chakra-ui/react";
import Card from "./Card";
import { useColorModeValue } from "@chakra-ui/react";

const projects = [
  {
    title: "Graduate Nurse Job Match",
    type: "Job Platform",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/project1.1.png"),
    stack: ['PHP', 'HTML', 'CSS', 'JS'],

  },
  
  {
    title: "Lume Web Design",
    type: "Static Web Site",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/project2.webp"),
    stack: ['PHP', 'HTML', 'CSS', 'JS'],

  },
  {
    title: "My Portfolio",
    type: "Portfolio",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/project3.png"),
    stack: ['PHP', 'HTML', 'CSS', 'JS'],

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
            description={project.description}
            imageSrc={project.getImageSrc()}
            stack={project.stack}
          />
        ))}
      </Stack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
