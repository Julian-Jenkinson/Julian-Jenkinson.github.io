import React, { useState } from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";

const SkillGrid = ({ techList }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <Box>
  <Text
    fontSize="24"
    fontWeight="600"
    fontFamily="monospace"
    color={hoveredItem ? hoveredItem.bgColor : "transparent"}
    pb={6}
    textAlign="center"
    transition="color 0.5s ease-in"
  >
    {hoveredItem ? `[${hoveredItem.tech}]` : "\u00A0" /* non-breaking space */}
  </Text>

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
        _hover={{ transform: "scale(1.1)" }}
        onMouseEnter={() => setHoveredItem(item)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <Text fontSize="50">{item.icon}</Text>
      </Box>
    ))}
  </SimpleGrid>
</Box>
  );
};

export default SkillGrid;
