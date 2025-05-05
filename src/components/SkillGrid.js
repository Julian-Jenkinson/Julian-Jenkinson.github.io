import React from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";

const SkillGrid = ({ techList }) => {
  return (
    <SimpleGrid 
      columns={{ base: 3, md: 5, lg: 6 }} 
      spacing={10}
    >
      {techList.map((item) => (
        <Box 
          key={item.tech} 
          textAlign="center"
          bg={item.bgColor}
          borderRadius="full"
          p={4}
          transition="all 0.1s ease"
          _hover={{
            transform: "scale(1.1)",
          }}
        >
          <Text fontSize="50">{item.icon}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default SkillGrid;
