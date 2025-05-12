import React, { useEffect, useState } from "react";
import { Box, HStack, Button, Accordion, AccordionItem, AccordionButton, 
         AccordionPanel, AccordionIcon, Wrap, WrapItem, useColorModeValue, 
         IconButton } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const textColor = useColorModeValue("black", "white");
  const highlightColor = "rgb(196,255,134)";
  const sectionIds = ["landing", "skills", "projects", "contactme"];
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      let current = "";

      sectionIds.forEach((id) => {
        const el = document.getElementById(`${id}-section`);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            current = id;
          }
        }
      });

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

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
      backgroundColor="transparent"
      zIndex="999"
      sx={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <Box maxWidth="1240px" margin="0 auto">
        <Accordion allowToggle>
          <AccordionItem border="none">
            {({ isExpanded }) => (
              <>
                <HStack
                  px={4}
                  py={4}
                  justifyContent="space-between"
                  alignItems="center"
                  zIndex="1001"
                >
                  <Button
                    fontWeight="900"
                    bg="none"
                    color={useColorModeValue("black", highlightColor)}
                    transition="transform 0.1s ease"
                    _hover={{ transform: "scale(1.1)" }}
                    onClick={() => handleClick("landing")}
                  >
                    Julian Jenkinson
                  </Button>

                  <HStack spacing={0}>
                    <ThemeToggle />
                    <AccordionButton
                      as={IconButton}
                      icon={<AccordionIcon />}
                      aria-label="Toggle menu"
                      bg="none"
                      _hover={{ transform: "scale(1.2)", background: "none" }}
                    />
                  </HStack>
                </HStack>

                <AccordionPanel pb={4}>
                  <Wrap spacing={{base:"5", sm:"8"}} px="16px"fontWeight="600" textAlign="right" justify="flex-end">
                    {sectionIds.map((id) => (
                      <WrapItem
                        key={id}
                        cursor="pointer"
                        fontSize={{base:"16px", sm:"18px"}} 
                        onClick={() => handleClick(id)}
                        color={activeSection === id ? highlightColor : textColor}
                        _hover={{
                          transform: "scale(1.05)",
                          color: highlightColor,
                          transition: "all 0.1s ease-in",
                        }}
                        transitionProperty="transform, color"
                      >
                        {id === "contactme" ? "Contact" : id.charAt(0).toUpperCase() + id.slice(1)}
                      </WrapItem>
                    ))}
                  </Wrap>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Header;
