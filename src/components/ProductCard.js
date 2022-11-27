import { Link } from "react-router-dom";
import { Flex, Box, Text } from "rebass/styled-components";
import ProductImageCard from "./ProductImageCard";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/detailpage/${product.name}`}>
      <Box
        sx={{
          width: "301px",
          margin: "auto",
          minWidth: "300px",
          borderRadius: "20px",
          position: "relative",
          backgroundColor: "white",
          paddingBottom: "40px",
          border: "2px solid #F4F6F5",
          "::after": {
            content: "''",
            display: "block",
            backgroundColor: product.color,
            position: "absolute",
            bottom: "-15px",
            left: "50%",
            width: "99%",
            height: "60px",
            borderRadius: "20px",
            zIndex: "-1",
            transform: "translateX(-50%) skewY(3deg)",
          },
        }}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <ProductImageCard img={product.img} subImg={product.subImg} />

          <Text
            mt="10px"
            textAlign="center"
            fontSize="14px"
            fontWeight="700"
            lineHeight="20px"
          >
            {product.desc}
          </Text>
          <Text
            mt="10px"
            as="a"
            color={product.color || "#000"}
            fontSize="14px"
            fontWeight="700"
          >
            Daha Daha
          </Text>
        </Flex>
      </Box>
    </Link>
  );
};

export default ProductCard;
