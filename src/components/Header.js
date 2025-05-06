import React, { useEffect, useRef, useState } from "react";
import { Text, Box, HStack, Button } from "@chakra-ui/react";
import ThemeToggle from './ThemeToggle';
import { useColorModeValue } from "@chakra-ui/react";
import HeaderMenu from "./HeaderMenu";// not use this



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
      //translateY={0}
      backgroundColor="transparent"
      zIndex="9999"
      sx={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
      >
        <Box 
          maxWidth="1240px" 
          margin="0 auto"
        >

          <HStack
            px={{base:"4px"}}
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
              <Button
              fontWeight= "900"
              bg='none' 
              color={useColorModeValue('black','rgb(196,255,134)')}
              transition="transform 0.1s ease"
              _hover={{ transform: "scale(1.1)" }}>            
                Julian Jenkinson
              </Button>
            </a>
              
            </nav>
            <nav>
              <HStack spacing={8}>
                <ThemeToggle />
                <HeaderMenu />
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
  );
};
export default Header;
