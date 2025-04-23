import { Heading, HStack, Image, Text, VStack, Box, Button, IconButton, Center} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const Card = ({ title, type, description, feature1Heading, feature1Description, feature2Heading, feature2Description, imageSrc, stack, repo, url, }) => {
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
    {/* Card image display */}
      <button onClick={togglePopout}>
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
            <Heading fontSize="18px">{title}</Heading>
            <Text>
              {type} <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </Text>
          </Box>
        </Box>
      </button>
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
            color={useColorModeValue("gray.700", "gray.300")}
            borderRadius="full"
            border="2px"
            borderColor={useColorModeValue("gray.700", "gray.300")}
          >
            {tech}
          </Box>
        ))}
      </HStack>

      {/* Fullscreen popout overlay */}
      {showPopout && (
        <Box
          position="fixed"
          top='0'
          left='0'
          right='0'
          bottom='0'
          width="100vw"
          height="100vh"
          bg="blackAlpha.700"
          backdropFilter="blur(6px)"
          zIndex="2000"
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={togglePopout}
          mt="0 !important"
          >
          {/* Project popout */}
          <Box
            position="relative"
            bg={useColorModeValue("gray.100", "gray.900")}
            fontFamily="monospace"
            p={8}
            borderRadius="xl"
            maxWidth="1000px"
            maxHeight="80vh"
            overflowY="auto"
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside the card
          >
            <IconButton
              onClick={togglePopout}
              position="absolute"
              right="3"
              top="3"
              size="xs"
              icon={<CloseIcon />}
              variant="unstyled"
              aria-label="Close popout"
              borderRadius="full"
              _hover={{
                transform: "scale(1.2)",  // Scales up slightly on hover
                transition: "transform 0.1s ease"  // Smooth transition for the hover effect
              }}
            />
            <Heading 
              mb={8} 
              fontSize="32px"
              fontFamily="monospace"
              textAlign="center"
            >
              {title}
            </Heading>
            {/* Tech stack */}
            <HStack 
              spacing={2} 
              mt={2}
              mb={6}
              justifyContent="center"
            >
              {stack.map((tech) => (
                <Box
                  key={tech}
                  px={2}
                  py={1}
                  fontSize="sm"
                  fontFamily='monospace'
                  fontWeight="bold"
                  color={useColorModeValue("gray.700", "gray.300")}
                  borderRadius="full"
                  border="2px"
                  borderColor={useColorModeValue("gray.700", "gray.300")}
                >
                  {tech}
                </Box>
              ))}
            </HStack>
            <Text mb={4} fontSize="16px">{description}</Text>
            <HStack mb={6}>
              <a
                href={repo}
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
                  Github &nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x"/>
                </Button>
              </a >
              <a
              href={url}
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
                View Website &nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x"/>
              </Button>
            </a >
            </HStack>
            <Heading><Text mb={4} fontFamily="body" fontSize="28px">{feature1Heading}</Text></Heading>
            <Text mb={4} fontSize="16px">{feature1Description}</Text>
            <Box
            display="grid"
            placeItems="center"
            width="100%"
            height="100%"
            >
              <Image
                src={imageSrc}
                alt={imageSrc}
                objectFit="cover"
                width="90%"
                height="auto"
                borderRadius="lg"
              />
            </Box>
            
          </Box>
        </Box>
      )}
    </>
  );
};

export default Card;
