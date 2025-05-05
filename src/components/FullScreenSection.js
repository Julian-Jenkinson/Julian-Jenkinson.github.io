import * as React from "react";
import {Box, VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <Box>
      <VStack
        px="20px" //set site margins
        color={isDarkBackground ? "white" : "black"}
        {...boxProps}//handles dark theme toggle
      >
        <VStack maxWidth="1200px" minHeight="100vh" {...boxProps}>
          {children}
        </VStack>
      </VStack>
    </Box>
  );
};

export default FullScreenSection;
