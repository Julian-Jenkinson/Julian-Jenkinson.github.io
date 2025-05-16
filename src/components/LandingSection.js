import React, { useMemo } from "react";
import { useColorModeValue, Heading, Text, VStack, HStack, Button } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion, animate } from "framer-motion";

const MotionText = motion(Text);

const letterVariant = {
  hidden: { rotateX: 90, opacity: 0, transformOrigin: "bottom center" },
  visible: (customDelay) => ({
    rotateX: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20, delay: customDelay },
  }),
};

// Helper: Fisher-Yates shuffle to randomize letter indices
function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Animate a word with letters flipping one at a time in random order
const animateWord = (word, baseDelay = 0) => {
  const letters = word.split("");
  // Stable random order per render using useMemo
  const order = useMemo(() => shuffle([...Array(letters.length).keys()]), [word]);

  // Assign delay per letter based on shuffled order
  const delays = Array(letters.length).fill(0);
  order.forEach((pos, idx) => {
    delays[pos] = baseDelay + idx * 0.2; // 0.1s stagger per letter
  });

  return letters.map((letter, i) => (
    <MotionText
      key={i}
      variants={letterVariant}
      initial="hidden"
      animate="visible"
      custom={delays[i]}
      display="inline-block"
      mx={0.5}
    >
      {letter}
    </MotionText>
  ));
};

const handleClick = (anchor) => {
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  
  if (element) {
    const top = element.offsetTop - 40;

    animate(window.scrollY, top, {
      type: "spring",
      stiffness: 130,
      damping: 17,
      onUpdate(value) {
        window.scrollTo(0, value);
      }
    });
  }
};

const LandingSection = () => {
  return (
    <FullScreenSection
      id="home-section"
      justifyContent="center"
      isDarkBackground
      bg={useColorModeValue("white", "black")}
      color={useColorModeValue("black", "white")}
    >
      <VStack lineHeight={0.8}>
        <Text fontSize="18px" fontFamily="mono" fontWeight="500" color="gray.500">
          Hi, I'm
        </Text>

        <Heading
          style={{ fontFamily: "Kanit", perspective: 600 }}
          fontSize={{ base: "62", md: "96", lg: "116px" }}
          fontWeight="700"
          display="flex"
          justifyContent="center"
        >
          {animateWord("Julian")}
        </Heading>

        <Heading
          style={{ fontFamily: "Kanit", perspective: 600 }}
          fontSize={{ base: "62", md: "96", lg: "116px" }}
          fontWeight="700"
          display="flex"
          justifyContent="center"
          mt={0}
        >
          {/* delay jenkinson animation by 1.2s (slightly after Julian) */}
          {animateWord("Jenkinson", 1.2)}
        </Heading>

        <Text
          fontSize="18px"
          fontFamily="mono"
          fontWeight="400"
          color="gray.500"
          py={4}
        >
          A Full Stack Web Developer
        </Text>

        <HStack>
          <a
            href="https://drive.google.com/file/d/1eCXQoQhoVvJa8E-C9ySUANO-BjWblVjI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              fontWeight="900"
              bg={useColorModeValue("black", "rgb(196,255,134)")}
              color={useColorModeValue("rgb(196,255,134)", "black")}
              transition="transform 0.1s ease"
              _hover={{ transform: "scale(1.1)" }}
            >
              Resume
            </Button>
          </a>
          <a
            href="#contactme-section"
            onClick={(event) => {
              event.preventDefault();
              handleClick("contactme");
            }}
          >
            <Button
              fontWeight="900"
              bg={useColorModeValue("black", "rgb(196,255,134)")}
              color={useColorModeValue("rgb(196,255,134)", "black")}
              transition="transform 0.1s ease"
              _hover={{ transform: "scale(1.1)" }}
            >
              Hire Me
            </Button>
          </a>
          <a
            href="https://github.com/julian-jenkinson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              bg={useColorModeValue("black", "rgb(196,255,134)")}
              color={useColorModeValue("rgb(196,255,134)", "black")}
              transition="transform 0.1s ease"
              _hover={{ transform: "scale(1.1)" }}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Button>
          </a>
        </HStack>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
