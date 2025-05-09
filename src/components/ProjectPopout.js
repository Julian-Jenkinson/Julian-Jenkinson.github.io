// src/components/PopoutWindow.js
import { Wrap, WrapItem, Box, Button, Heading, HStack, IconButton, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ThemeToggle from "./ThemeToggle";

const ProjectPopout = ({ onClose, title, stack, description, repo, url, feature1Heading, feature1Description, feature2Heading, feature2Description, feature3Heading, feature3Description, summary, image1Src, image2Src, image3Src }) => {
  return (
    
    <Box
      //overlay
      position="fixed"
      top='0'
      left='0'
      right='0'
      bottom='0'
      width="100vw"
      height="100vh"
      bg="blackAlpha.700"
      backdropFilter="blur(6px)"
      zIndex="20000"//very top
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={onClose}
      mt="0 !important"
    >
      <Box
        position="relative"
        //bg={useColorModeValue("gray.100", "gray.900")}
        //fontFamily="monospace"
        //px={0}
        //mx={0}
        //pt={14}
        //pb={10}
        //borderRadius="xl"
        width="85%"
        maxWidth="1000px"
        height="80vh"
        //overflowY="auto"
        //onClick={(e) => e.stopPropagation()}
      >
        <IconButton
          onClick={onClose}
          position="absolute"
          right="5"
          top="5"
          size="xs"
          icon={<CloseIcon />}
          variant="unstyled"
          aria-label="Close popout"
          borderRadius="full"
          _hover={{
            transform: "scale(1.2)",
            transition: "transform 0.1s ease"
          }}
        />
        <Box
          bg={useColorModeValue("gray.100", "gray.900")}
          fontFamily="monospace"
          px={{base: "8", md: "14"}}
          pt={14}
          pb={10}
          borderRadius="xl"
          width="100%"
          height="100%"
          overflowY="auto"
          onClick={(e) => e.stopPropagation()}
        >
          <Heading mb={8} fontSize="32px" fontFamily="body" textAlign="center" fontWeight="900">
            {title}
          </Heading>

          {/* Tech stack */}
                  <Wrap my={2}>
                    {stack.map((tech) => (
                      <WrapItem
                        as="span"
                        key={tech}
                        px={2}
                        py={1}
                        mx={1}
                        fontSize="15"
                        fontFamily='monospace'
                        fontWeight="500"
                        color={useColorModeValue("gray.700", "gray.400")}
                        borderRadius="full"
                        border="1px"
                        borderColor={useColorModeValue("gray.700", "gray.400")}
                      >
                        {tech}
                      </WrapItem>
                    ))}
                  </Wrap>

          <Text mb={4} fontSize="18px">{description}</Text>

          <HStack spacing={3} mb={8}>
            <a href={repo} target="_blank" rel="noopener noreferrer">
              <Button
                fontWeight="900"
                bg={useColorModeValue('black', 'rgb(196,255,134)')}
                color={useColorModeValue('rgb(196,255,134)', 'black')}
                transition="transform 0.1s ease"
                _hover={{ transform: "scale(1.1)" }}
              >
                Github &nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x" />
              </Button>
            </a>
            {url && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Button
                fontWeight="900"
                bg={useColorModeValue('black', 'rgb(196,255,134)')}
                color={useColorModeValue('rgb(196,255,134)', 'black')}
                transition="transform 0.1s ease"
                _hover={{ transform: "scale(1.1)" }}
              >
                View Website &nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x" />
              </Button>
            </a>
            )}
          </HStack>
          
          {/*Feature 1*/}
          <Heading>
            <Text mb={2} fontFamily="body" fontSize="26px" fontWeight="900">{feature1Heading}</Text>
          </Heading>
          <Text mb={4} fontSize="16px">{feature1Description}</Text>
          <Box display="grid" placeItems="center" width="100%" height="auto">
            <Image
              src={image1Src}
              alt={image1Src}
              objectFit="cover"
              height="auto"
              borderRadius="lg"
            />
          </Box>

          {/*Feature 2*/}
          <Heading>
            <Text mt={8} mb={2} fontFamily="body" fontSize="26px" fontWeight="900">{feature2Heading}</Text>
          </Heading>
          <Text mb={4} fontSize="16px">{feature2Description}{title === "My Portfolio (2025)" && <ThemeToggle />}</Text>    
          <Box display="grid" placeItems="center" width="100%" height="auto">
            <Image
              src={image2Src}
              alt={image2Src}
              objectFit="cover"
              height="auto"
              borderRadius="lg"
            />
          </Box>
          
          {/*Feature 3*/}
          <Heading>
            <Text mt={8} mb={2} fontFamily="body" fontSize="26px" fontWeight="900">{feature3Heading}</Text>
          </Heading>
          <Text mb={4} fontSize="16px">{feature3Description}</Text>
          {image3Src && (
          <Box display="grid" placeItems="center" width="100%" height="auto">
            <Image
              src={image3Src}
              alt={image3Src}
              objectFit="cover"
              height="auto"
              borderRadius="lg"
            />  
          </Box>
          )}
          <Text mt={8} fontSize="16px">{summary}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectPopout;
