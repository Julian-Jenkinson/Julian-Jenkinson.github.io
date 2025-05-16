import React from "react";
import { useColorModeValue, Heading, Text, VStack, HStack, Button } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { animate } from "framer-motion";
import TextReveal from "./TextReveal";
import { scrollToSection } from "./Utilities/scrollToSection";


const LandingSection = () => {
  return (
    <FullScreenSection
      id="home-section"
      justifyContent="center"
      isDarkBackground
      bg={useColorModeValue("white", "black")}
      color={useColorModeValue("black", "white")}
    >
      <VStack lineHeight={0.8}>
        <Text fontSize="18px" fontFamily="mono" fontWeight="500" color="gray.500">
          Hi, I'm
        </Text>

        <Heading
          style={{ fontFamily: "Kanit", perspective: 600 }}
          fontSize={{ base: "62", md: "96", lg: "116px" }}
          fontWeight="700"
          display="flex"
          justifyContent="center"
        >
          <TextReveal word="Julian" />
        </Heading>

        <Heading
          style={{ fontFamily: "Kanit", perspective: 600 }}
          fontSize={{ base: "62", md: "96", lg: "116px" }}
          fontWeight="700"
          display="flex"
          justifyContent="center"
          mt={0}
        >
          <TextReveal word="Jenkinson" baseDelay={1.2} />
        </Heading>

        <Text
          fontSize="18px"
          fontFamily="mono"
          fontWeight="400"
          color="gray.500"
          py={4}
        >
          A Full Stack Web Developer
        </Text>

        <HStack>
          <a
            href="https://drive.google.com/file/d/1eCXQoQhoVvJa8E-C9ySUANO-BjWblVjI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              fontWeight="900"
              bg={useColorModeValue("black", "rgb(196,255,134)")}
              color={useColorModeValue("rgb(196,255,134)", "black")}
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
              scrollToSection("contactme");
            }}
          >
            <Button
              fontWeight="900"
              bg={useColorModeValue("black", "rgb(196,255,134)")}
              color={useColorModeValue("rgb(196,255,134)", "black")}
              transition="transform 0.1s ease"
              _hover={{ transform: "scale(1.1)" }}
            >
              Hire Me
            </Button>
          </a>
          <a
            href="https://github.com/julian-jenkinson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              bg={useColorModeValue("black", "rgb(196,255,134)")}
              color={useColorModeValue("rgb(196,255,134)", "black")}
              transition="transform 0.1s ease"
              _hover={{ transform: "scale(1.1)" }}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Button>
          </a>
        </HStack>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
