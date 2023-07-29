import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
  return (
    <div>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px"></Image>
        <SearchInput onSearch={(searchText) => onSearch(searchText)} />
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </div>
  );
};

export default NavBar;
