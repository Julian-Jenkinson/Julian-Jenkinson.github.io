import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from "@chakra-ui/react";
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
        <MenuButton as={Button} rightIcon={<HamburgerIcon />}>
        </MenuButton>
        <MenuList>
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
  