import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from "@chakra-ui/react";
  import { ChevronDownIcon } from "@chakra-ui/icons";
  
  const HeaderMenu = () => {
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem>About</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Contact</MenuItem>
        </MenuList>
      </Menu>
    );
  };
  
  export default HeaderMenu;
  