import React, { useEffect } from "react";
import { Box } from "rebass/styled-components";
import useIsMobile from "../hooks/useIsMobile";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import ProductSlider from "../components/ProductSlider";
import TabSlider from "../components/TabSlider";
import useGetProductData from "../hooks/useGetProductData";
import useGetTabData from "../hooks/useGetTabData";

const Layaout = () => {
  const [products, setProducts] = React.useState([]);
  const isMobile = useIsMobile();
  const productItems = useGetProductData();
  const tabItems = useGetTabData();

  const filteredProductsByBrand = (brand) => {
    if (brand.includes("Fırsat") || !brand) {
      setProducts(productItems);
    } else {
      const filteredProducts = productItems.filter((product) => {
        return product.name === brand;
      });
      setProducts(filteredProducts);
    }
    console.log(brand);
  };
  useEffect(() => {
    setProducts(productItems || []);
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        maxWidth: "1200px",
        margin: "auto",
        overflow: "hidden",
      }}
    >
      <Header />
      <TabSlider tabItems={tabItems} handleTab={filteredProductsByBrand} />
      <ProductSlider products={products} />

      {isMobile ? <BottomNav /> : null}
    </Box>
  );
};

export default Layaout;
