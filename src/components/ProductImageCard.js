import React from "react";
import { Box, Flex } from "rebass/styled-components";
import Back from "../icons/Back.svg";
import { useNavigate } from "react-router-dom";

const ProductImageCard = ({ img, subImg, detailPage }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "570px",
        "@media screen and (max-height: 650px)": {
          height: "450px",
        },
      }}
    >
      <Box
        as="img"
        src={img}
        alt="product"
        sx={{
          width: detailPage ? "100%" : "299px",
          height: detailPage ? "100%" : "247px",
          borderRadius: detailPage ? "0 0 0 40%" : "20px 20px 20px 40%",
        }}
      />
      <Box
        sx={{
          width: 70,
          height: 70,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          p: "5px",
          backgroundColor: "white",
          position: "absolute",
          bottom: "0",
          left: 0,
        }}
      >
        <Box
          as="img"
          src={subImg}
          alt="product"
          sx={{
            borderRadius: "50%",
          }}
        />
      </Box>
      {detailPage && (
        <Flex
          sx={{
            position: "absolute",
            top: "55px",
            left: "15px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#1D1E1C",
            padding: "10px",
          }}
          onClick={() => navigate(-1)}
        >
          <Box as="img" src={Back} alt="arrow" />
        </Flex>
      )}
    </Box>
  );
};

export default ProductImageCard;
