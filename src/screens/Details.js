import React from "react";
import { Box, Button, Flex, Text } from "rebass/styled-components";
import ProductImageCard from "../components/ProductImageCard";
import useGetProductData from "../hooks/useGetProductData";

const Details = () => {
  const productItems = useGetProductData();
  const name = window.location.pathname.split("/")[2];
  const product = productItems.filter((product) => {
    return product.name === name;
  })[0];

  return (
    <Flex
      sx={{
        position: "relative",
        width: ["100%", "74%", "80%", "80%"],
        maxWidth: "1300px",
        margin: "auto",
        flexDirection: ["column", "column", "row", "row"],
        justifyContent: ["space-between", "space-between", "center", "center"],
        alignItems: "center",
        borderRadius: "20px",
        padding: [0, "20px", "20px", "20px"],
        height: [null, null, "500px", "500px"],
        backgroundColor: "#eceeef",
        pb: ["100px", "50px", "0", "0"],
      }}
    >
      <ProductImageCard img={product.img} subImg={product.subImg} detailPage />
      <Box
        px="15px"
        width={["100%", "100%", "80%", "50%"]}
        height={["100%", "100%", "100%", "100%"]}
        overflowX="auto"
      >
        <Text
          fontSize={["26px", "26px", "20px"]}
          fontWeight="700"
          lineHeight="30px"
        >
          {product.detailHeader}
        </Text>
        <Text
          mt="10px"
          fontSize={["16px", "16px", "14px"]}
          fontWeight="400"
          lineHeight="22px"
          pb={["0px", "0px", "50px", "50px"]}
        >
          {product.detailText} {product.detailText}
        </Text>
        <Button
          sx={{
            position: "fixed",
            bottom: "20px",
            height: "56px",
            width: "90%",
            borderRadius: "20px",
            backgroundColor: product.color,
            color: "white",
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "28px",
            cursor: "pointer",
          }}
        >
          Hemen Katıl
        </Button>
      </Box>
    </Flex>
  );
};

export default Details;
