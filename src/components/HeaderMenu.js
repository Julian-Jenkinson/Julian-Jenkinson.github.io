import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
  import { HamburgerIcon } from "@chakra-ui/icons";
  
  const HeaderMenu = () => {
    
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
      <Menu>
        <MenuButton 
          as={Button}
          sx={{ marginLeft: '0 !important' }}
          bg="none"
          transition="transform 0.1s ease"
          _hover={{ transform: "scale(1.2)", background:"none" }}
        >
          <HamburgerIcon w={6} h={6} />
        </MenuButton>
        <MenuList 
          bg="rgba(255, 255, 255, 0.15)" // semi-transparent white
          backdropFilter="blur(10px)"
          border="1px solid rgba(255, 255, 255, 0.2)" // optional: soft border
          boxShadow="lg"
        >
          <MenuItem
            href="#landing-section"
            onClick={(event) => {
              event.preventDefault();
              handleClick("landing");
            }}
          >
            Home
          </MenuItem>
          <MenuItem
          href="#skills-section"
          onClick={(event) => {
            event.preventDefault();
            handleClick("skills");
          }}
          >
            Skills
          </MenuItem>
          <MenuItem
          href="#projects-section"
          onClick={(event) => {
            event.preventDefault();
            handleClick("projects");
          }}
          >
            Projects
          </MenuItem>
          <MenuItem
          href="#contactme-section"
          onClick={(event) => {
            event.preventDefault();
            handleClick("contactme");
          }}
          >
            Contact
          </MenuItem>
        </MenuList>
      </Menu>
    );
  };
  
  export default HeaderMenu;
  