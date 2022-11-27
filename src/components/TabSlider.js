import { Flex, Box, Text } from "rebass/styled-components";
import { useState } from "react";

const TabSlider = ({ tabItems, handleTab }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <Flex
      sx={{
        overflowX: "scroll",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        scrollSnapType: "x mandatory",
        scrollBehavior: "smooth",
        scrollSnapPointsX: "repeat(100%)",
        scrollSnapStop: "always",
        scrollSnapAlign: "start",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {tabItems.map((tab) => (
        <Flex
          key={tab.id}
          className={activeTab === tab.id ? "active" : ""}
          sx={{
            alignItems: "center",
            justifyContent: "flex-start",
            minWidth: "105px",
            height: "36px",
            backgroundColor: "white",
            border: "1px solid #ECEEEF",
            borderRadius: "8px",
            mr: "5px",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            // first child
            "&:first-child": {
              ml: "15px",
            },
            // active tab
            "&.active": {
              border: "2px solid #F00",
            },
          }}
          onClick={() => {
            handleTabClick(tab.id);
            handleTab(tab.brand);
          }}
        >
          <Flex alignItems="center" ml={2}>
            <Box as="img" src={tab.img} alt={tab.brand} />
            <Text
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "12px",
                fontWeight: "400",
                ml: "5px",
              }}
            >
              {tab.brand}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default TabSlider;
