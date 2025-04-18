import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useColorModeValue } from "@chakra-ui/react";

const Card = ({ title, type, description, imageSrc }) => {
  return (
    <Box 
      position="relative" 
      borderRadius="10px" 
      overflow="hidden"
    >
  <Image
    src={imageSrc}
    alt={imageSrc}
    objectFit="cover"
    width="100%"
    height="auto"
    transition="transform 0.3s ease"
    _hover={{ transform: "scale(1.05)" }}
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
    <Heading fontSize="18px">{title}</Heading>
    <Text>{type}<FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
  </Box>
</Box>

    
  )
};

export default Card;
