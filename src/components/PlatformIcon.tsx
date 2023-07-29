import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/usePlatforms";
import { HStack, Icon, Text } from "@chakra-ui/react";

interface PlatformIconProps {
  platforms: Platform[];
}

const PlatformIcon = ({ platforms }: PlatformIconProps) => {
  const iconMap = {
    //name: PlayStation
    //slug: playstation
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    andriod: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" key={platform.id} />
      ))}
    </HStack>
  );
};

export default PlatformIcon;
