import React from "react";
import { useColorModeValue ,Heading, Text, VStack, HStack, Button} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
  
  <FullScreenSection
    id="landing-section"
    justifyContent="center"
    //alignItems="center"
    isDarkBackground
    bg={useColorModeValue("white", "black")} 
    color={useColorModeValue("black", "white")}
  >
    <VStack>
      <Text fontSize="20px" fontWeight="700" color="gray.500">Hi, I'm</Text>
      <Heading fontSize="92px" fontWeight="900">Julian</Heading>
      <Text fontSize="92px" fontWeight="900">Jenkinson</Text>
      <Text fontSize="25px" fontWeight="600" color="gray.500">A Full Stack Web Developer</Text>
      <HStack>

      <a
        href="https://drive.google.com/file/d/1g0I-1ZxyEdo5J4l5Woq5xI79im_ssANQ/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          fontWeight= "900" 
          bg={useColorModeValue('black', 'rgb(196,255,134)')} 
          color={useColorModeValue('rgb(196,255,134)', 'black')}
          transition="transform 0.1s ease"
          _hover={{ transform: "scale(1.1)" }}
          >
            Resume
        </Button>
      </a>
      <a
        href="#contactme-section"
        onClick={(event) => {
          event.preventDefault();
          handleClick("contactme");
        }}
      >
        <Button
        fontWeight= "900"
        bg={useColorModeValue('black', 'rgb(196,255,134)')} 
        color={useColorModeValue('rgb(196,255,134)', 'black')}
        transition="transform 0.1s ease"
        _hover={{ transform: "scale(1.1)" }}> 
          Hire Me
        </Button>
      </a>
      <a
        href="https://github.com/catc4ke"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button 
        bg={useColorModeValue('black', 'rgb(196,255,134)')} 
        color={useColorModeValue('rgb(196,255,134)', 'black')}
        transition="transform 0.1s ease"
        _hover={{ transform: "scale(1.1)" }}>
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Button>
      </a>

      </HStack>
    </VStack>
  
  </FullScreenSection>
);

export default LandingSection;
