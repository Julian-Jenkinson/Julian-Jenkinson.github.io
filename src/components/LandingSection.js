import React from "react";
import {Heading, Text, VStack, HStack, Button} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useColorModeValue } from "@chakra-ui/react";

//could move this to utilities??
const handleClick = (anchor) => {
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const LandingSection = () => (

  //ssomething like this for button colour
  //const bgColor = useColorModeValue('white', 'gray.800'); // white for light mode, gray.800 for dark mode


  
  <FullScreenSection
    id="landing-section"
    justifyContent="center"
    //alignItems="center"
    isDarkBackground
    bg={useColorModeValue("white", "black")} 
    color={useColorModeValue("black", "white")}
  >
    <VStack>
      <Text fontSize="20px" fontWeight="700">Hi, I'm</Text>
      <Heading fontSize="92px" fontWeight="900">Julian</Heading>
      <Text fontSize="92px" fontWeight="900">Jenkinson</Text>
      <Text fontSize="25px" fontWeight="600">A Full Stack Web Developer</Text>
      <HStack>

      <a
        href="https://drive.google.com/file/d/1g0I-1ZxyEdo5J4l5Woq5xI79im_ssANQ/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button bg="rgb(196,255,134)" color="black">Resume</Button>
      </a>
      <a
        href="#contactme-section"
        onClick={(event) => {
          event.preventDefault();
          handleClick("contactme");
        }}
      >
        <Button bg="rgb(196,255,134)" color="black">Hire Me</Button>
      </a>
      <a
        href="https://github.com/catc4ke"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button bg="rgb(196,255,134)" color="black">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Button>
      </a>

      </HStack>
    </VStack>
  
  </FullScreenSection>
);

export default LandingSection;
