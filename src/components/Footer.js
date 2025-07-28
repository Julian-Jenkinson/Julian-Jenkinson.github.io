import React from "react";
import {Box, Flex, useColorModeValue} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg={useColorModeValue("white", "transparent")}>

      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color={useColorModeValue("black", "white")}
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Julian Jenkinson © 2025</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
