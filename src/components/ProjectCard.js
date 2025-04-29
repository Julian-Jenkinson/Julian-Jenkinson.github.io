import { Heading, HStack, Image, Text, Box} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import ProjectPopout from "./ProjectPopout";

const Card = ({ title, type, description, feature1Heading, feature1Description, feature2Heading, feature2Description, feature3Heading, feature3Description, summary, image1Src, image2Src, image3Src, stack, repo, url, }) => {
  const [showPopout, setShowPopout] = useState(false);

  // Disable background scrolling when popout is open
  useEffect(() => {
    if (showPopout) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }
    // Cleanup
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopout]);
  
  const togglePopout = () => {
    setShowPopout(!showPopout);
  };
  
  return (
    <>
      <button onClick={togglePopout}>
        <Box
          position="relative"
          borderRadius="10px"
          overflow="hidden"
        >
          <Image
            src={image1Src}
            alt={image1Src}
            objectFit="cover"
            width="100%"
            height="auto"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.03)" }}
          />
          <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            height="40%"
            bgGradient="linear(to-t, blackAlpha.800 10%, rgba(0,0,0,0.6) 50%, transparent 100%)"
            pointerEvents="none"
          />
          <Box
            position="absolute"
            bottom="0"
            width="100%"
            px={4}
            py={3}
            zIndex={1}
            color="white"
            pointerEvents="none"
          >
            <Heading 
              textAlign="left" 
              fontSize="22px"
            >
              {title}
            </Heading>
            <Text
              textAlign="left"
              fontSize="18px"
            >
              {type}
            </Text>
          </Box>
        </Box>

        {/* Tech stack */}
        <HStack spacing={2} mt={2}>
          {stack.map((tech) => (
            <Box
              key={tech}
              px={2}
              py={1}
              fontSize="sm"
              fontFamily='monospace'
              fontWeight="bold"
              color={useColorModeValue("gray.700", "gray.400")}
              borderRadius="full"
              border="2px"
              borderColor={useColorModeValue("gray.700", "gray.400")}
            >
              {tech}
            </Box>
          ))}
        </HStack>
      
      </button>
      

      {showPopout && (
  <ProjectPopout
    onClose={togglePopout}
    title={title}
    stack={stack}
    description={description}
    repo={repo}
    url={url}
    feature1Heading={feature1Heading}
    feature1Description={feature1Description}
    feature2Heading={feature2Heading}
    feature2Description={feature2Description}
    feature3Heading={feature3Heading}
    feature3Description={feature3Description}
    summary={summary}
    image1Src={image1Src}
    image2Src={image2Src}
    image3Src={image3Src}
  />
)}
      
      
    </>
  );
};

export default Card;
