import React, { useState, useEffect } from "react";
import { Box, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const SkillGrid = ({ techList }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [spinCount, setSpinCount] = useState(0);
  const [prevTech, setPrevTech] = useState(null);

  return (
    <Box>
      <MotionText
        fontSize="24"
        fontWeight="600"
        fontFamily="monospace"
        color={hoveredItem ? hoveredItem.bgColor : "transparent"}
        pb={6}
        textAlign="center"
        style={{ transformStyle: "preserve-3d" }}
        initial={false}
        animate={{
          rotateY: spinCount * 360,
          scale: hoveredItem ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 20, mass: 2.5 }}
      >
        {hoveredItem ? `[${hoveredItem.tech}]` : "\u00A0"}
      </MotionText>

      <SimpleGrid columns={{ base: 3, md: 5, lg: 6 }} spacing={10}>
        {techList.map((item) => (
          <MotionBox
          key={item.tech}
          
          bg={item.bgColor}
          borderRadius="full"
          p={{base:2, sm:3.5}}
          style={{ WebkitTapHighlightColor: "transparent" }}
          cursor="pointer"
          onMouseEnter={() => {
            setHoveredItem(item);
            setSpinCount((prev) => prev + 1); // Always retrigger spin
          }}
          onMouseLeave={() => setHoveredItem(null)}
          whileHover={{
            scale: 1.15,
            transition: { type: "spring", stiffness: 300, damping: 15 },
          }}
          whileTap={{ 
            scale: 1.15,
            transition: { type: "spring", stiffness: 400, damping: 15 },
          }}
          onTapStart={() => {
            setHoveredItem(item);
            setSpinCount((prev) => prev + 1); // Retrigger spin on tap too
          }}
          
        >
          <Flex
  justify="center"
  align="center"
  w="100%"
  h="100%"
>
  <Text fontSize="50">{item.icon}</Text>
</Flex>
        </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SkillGrid;
