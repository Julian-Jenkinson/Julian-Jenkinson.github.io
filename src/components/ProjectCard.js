import { Heading, HStack, Image, Text, Box, Wrap, WrapItem} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import ProjectPopout from "./ProjectPopout";
import { AnimatePresence, motion } from "framer-motion";

const MotionImage = motion(Image);

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
          //width="100%"
        >
          <MotionImage
            src={image1Src}
            alt={image1Src}
            objectFit="cover"
            width="100%"
            height="auto"
            whileHover={{
              scale: 1.03,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
              }
            }}
          />

          
          <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            height="40%"
            bgGradient="linear(to-t, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.3) 60%, transparent 100%)"

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
        <Wrap mt={2}>
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
      
      </button>
      

      <AnimatePresence mode="wait">
      {showPopout && (
        <ProjectPopout
          key="project-popout"
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
    </AnimatePresence>
      
      
    </>
  );
};

export default Card;
