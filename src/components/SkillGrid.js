import React, { useState } from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";

const SkillGrid = ({ techList }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <Box position="relative">
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
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Text fontSize="50">{item.icon}</Text>
          </Box>
        ))}
      </SimpleGrid>

      {hoveredItem && (
        <Text
          position="fixed"
          bottom="20px"
          left="50%"
          transform="translateX(-50%)"
          fontSize="40"
          fontWeight="bold"
          fontFamily="monospace"
          //bg="blackAlpha.700"
          color={hoveredItem.bgColor}
          px={4}
          py={2}
          borderRadius="md"
          zIndex={1000}
          
        >
          {hoveredItem.tech}
        </Text>
      )}
    </Box>
  );
};

export default SkillGrid;
