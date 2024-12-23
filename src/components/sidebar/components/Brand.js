import React from "react";

// Chakra imports
import { Flex, useColorModeValue, Image } from "@chakra-ui/react";

// Custom components
import MaeleeLightLogo from "assets/img/logo/logo-light.png"
import MaeleeLogo from "assets/img/logo/logo.png"
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  // let logoColor = useColorModeValue("navy.700", "white");
  let logoType = useColorModeValue(MaeleeLogo, MaeleeLightLogo);

  return (
    <Flex align='center' direction='column'>
      <Image h='56px' w='175px' my='20px' src={logoType} alt="logo" />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
