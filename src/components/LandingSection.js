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
    <VStack lineHeight={.8}>
      <Text fontSize="20px" fontFamily="mono" fontWeight="500" color="gray.500">Hi, I'm</Text>
      <Heading style={{ fontFamily: 'Kanit'}} fontSize={{ base: "70", md: "85", lg: "112px" }} fontWeight="700"  >Julian</Heading>
      <Text style={{ fontFamily: 'Kanit'}} fontSize={{ base: "70", md: "96", lg: "112px" }} fontWeight="700">Jenkinson</Text>
      <Text fontSize="20px" fontFamily="mono" fontWeight="400" color="gray.500" py={4}>A Full Stack Web Developer</Text>
      <HStack>
      <a
        href="https://drive.google.com/file/d/1eCXQoQhoVvJa8E-C9ySUANO-BjWblVjI/view?usp=sharing"
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
        href="https://github.com/julian-jenkinson"
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
