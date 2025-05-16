import React, { useMemo } from "react";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text);

const letterVariant = {
  hidden: { rotateX: 90, opacity: 0, transformOrigin: "bottom center" },
  visible: (customDelay) => ({
    rotateX: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: customDelay,
    },
  }),
};

const shuffle = (array) => array.slice().sort(() => Math.random() - 0.5);

const AnimatedText = ({ word, baseDelay = 0 }) => {
  const letters = word.split("");
  const order = useMemo(() => shuffle([...Array(letters.length).keys()]), [word]);
  const delays = Array(letters.length).fill(0);
  order.forEach((pos, idx) => {
    delays[pos] = baseDelay + idx * 0.15;
  });

  return (
    <span style={{ display: "inline-block" }}>
      {letters.map((letter, i) => (
        <MotionText
          key={i}
          as="span"
          variants={letterVariant}
          initial="hidden"
          animate="visible"
          custom={delays[i]}
          display="inline-block"
          mx={0.5}
        >
          {letter}
        </MotionText>
      ))}
    </span>
  );
};

export default AnimatedText;
