import React, { useState, useEffect } from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const SkillGrid = ({ techList }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [spinCount, setSpinCount] = useState(0);
  const [prevTech, setPrevTech] = useState(null);

  // This is just to ensure the skill text spin gets a complete rotation
  useEffect(() => {
    if (hoveredItem?.tech && hoveredItem.tech !== prevTech) {
      setSpinCount((prev) => prev + 1);
      setPrevTech(hoveredItem.tech);
    }
  }, [hoveredItem, prevTech]);

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
            textAlign="center"
            bg={item.bgColor}
            borderRadius="full"
            p={3.5}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
            whileHover={{
              scale: 1.15,
              transition: { type: "spring", stiffness: 300, damping: 15 },
            }}
            whileTap={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 400, damping: 15 },
            }}
          >
            <Text fontSize="50">{item.icon}</Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SkillGrid;
