import React, { useEffect, useRef, useState } from "react";
import { Text, Box, HStack } from "@chakra-ui/react";
import ThemeToggle from './ThemeToggle';
//import { useColorModeValue } from "@chakra-ui/react";



const Header = () => {

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

  return (
      <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      backgroundColor="transparent"
      zIndex="1000"
      sx={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
      >
        <Box maxWidth="1280px" margin="0 auto">
          <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <nav>
            <a
              href="#landing-section"
              onClick={(event) => {
              event.preventDefault();
              handleClick("landing");
              }}
            >
              <Text>Julian Jenkinson</Text>
            </a>
              
            </nav>
            <nav>
              <HStack spacing={8}>
                <ThemeToggle />

                  <a
                      href="#landing-section"
                      onClick={(event) => {
                        event.preventDefault();
                        handleClick("landing");
                      }}
                    >
                    Home
                  </a>
                  <a
                    href="#projects-section"
                    onClick={(event) => {
                      event.preventDefault();
                      handleClick("projects");
                    }}
                  >
                  Projects
                </a>
                <a
                  href="#contactme-section"
                  onClick={(event) => {
                    event.preventDefault();
                    handleClick("contactme");
                  }}
                >
                Contact
                </a>
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
  );
};
export default Header;
