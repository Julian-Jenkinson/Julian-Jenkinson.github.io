import {
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  VStack,
  useDisclosure,
  Box,
  useColorModeValue,
  
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

const HeaderMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textColor = useColorModeValue("black", "white");

  //Highlight active menu items
  const [activeSection, setActiveSection] = useState("");
  const sectionIds = ["landing", "skills", "projects", "contactme"];

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
      onClose();
    }
    
  };

  return (
    <>
      <IconButton
        icon={isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={6} h={6} />}
        onClick={isOpen ? onClose : onOpen}
        aria-label="Toggle menu"
        bg="none"
        sx={{ marginLeft: "0 !important" }}
        transition="transform 0.1s ease"
        _hover={{ transform: "scale(1.2)", background: "none" }}
      />

      <Drawer 
        isOpen={isOpen} 
        placement="top" 
        onClose={onClose} 
        blockScrollOnMount={false}
        size="full"
        
      >  
        <DrawerOverlay bg="rgba(0, 0, 0, 0.10)"
        zIndex="1000" // middle z ---------------------------
        
        />
        <DrawerContent
          color={textColor}
          bg="transparent"
          backdropFilter="blur(10px)"
          WebkitBackdropFilter="blur(10px)"
          zIndex="1000" // middle z ---------------------------
          //mt="80px"
          onClick={onClose}//
        >
          <DrawerBody 
            display="flex" 
            justifyContent="center"
            //alignItems="center"
            pt="140px"
          >
            <VStack spacing={2} fontSize="42" fontWeight="900">
              <Box 
                cursor="pointer" 
                onClick={() => handleClick("landing")}
                color={activeSection === "landing" ? 'rgb(196,255,134)' : textColor}
                _hover={{
                  transform: "scale(1.05)",
                  color: 'rgb(196,255,134)',
                  transition: "all 0.1s ease-in",
                }}
                transitionProperty="transform, color"
                >
                Home
              </Box>
              <Box 
                cursor="pointer" 
                onClick={() => handleClick("skills")}
                color={activeSection === "skills" ? 'rgb(196,255,134)' : textColor}
                _hover={{
                  transform: "scale(1.05)",
                  color: 'rgb(196,255,134)',
                  transition: "all 0.1s ease-in",
                }}
                transitionProperty="transform, color"
              >
                Skills
              </Box>
              <Box 
                cursor="pointer" 
                onClick={() => handleClick("projects")}
                color={activeSection === "projects" ? 'rgb(196,255,134)' : textColor}
                _hover={{
                  transform: "scale(1.05)",
                  color: 'rgb(196,255,134)',
                  transition: "all 0.1s ease-in",
                }}
                transitionProperty="transform, color"
              >
                Projects
              </Box>
              <Box 
                cursor="pointer" 
                onClick={() => handleClick("contactme")}
                color={activeSection === "contactme" ? 'rgb(196,255,134)' : textColor}
                _hover={{
                  transform: "scale(1.05)",
                  color: 'rgb(196,255,134)',
                  transition: "all 0.1s ease-in",
                }}
                transitionProperty="transform, color"
              >
                Contact
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HeaderMenu;
