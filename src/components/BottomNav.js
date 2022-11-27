import React from "react";
import { Flex, Box, Text } from "rebass/styled-components";
import ExploreIcon from "../icons/explore-icon.svg";
import HomeIcon from "../icons/home-icon.svg";
import StarIcon from "../icons/star-icon.svg";

const BottomNav = () => {
  const NavItem = [
    {
      icon: ExploreIcon,
      title: "Keşfet",
    },
    {
      icon: HomeIcon,
    },
    {
      icon: StarIcon,
      title: "Daha Cüzdan",
    },
  ];
  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      sx={{
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "68px",
        overflow: "visible",
        background: "#ECEEEF",
        borderRadius: "20px 20px 0 0",
        boxShadow: "0px 0px 6px 2px rgba(0, 0, 0, 0.05)",
      }}
    >
      {NavItem.map((item, index) => (
        <Flex
          flexDirection="column"
          alignItems="center"
          width="33%"
          key={index}
          mt={!item.title ? "-10px" : "0px"}
        >
          <Box as="img" src={item.icon} alt={item.title} />
          <Text
            mt={1}
            sx={{
              textTransform: "uppercase",
              fontSize: "10px",
              fontWeight: "700",
              lineHeight: "12px",
            }}
          >
            {item.title}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default BottomNav;
