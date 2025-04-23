import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";


const SkillsSection = () => {
  return (
    <FullScreenSection as="section"
      id="skills-section"
      isDarkBackground
      p={10}
      alignItems="flex-start"
      spacing={8}
      bg={useColorModeValue("white", "black")} 
      color={useColorModeValue("black", "white")}
    >
      <Heading as="h1">
        Skills
      </Heading>
      
    </FullScreenSection>
  );
};

export default SkillsSection;
