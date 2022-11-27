import { Box, Flex } from "rebass/styled-components";
import ProductCard from "./ProductCard";
import { StyledSwiper, SwiperSlide } from "./Swiper";

const ProductSlider = ({ products }) => {
  if (!products.length)
    return (
      <Flex
        sx={{
          width: "100%",
          height: "calc(100vh - 180px)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Seçili Markada Ürün Bulunamadı</h3>
      </Flex>
    );
  return (
    <>
      <Box width={1} mt={3} sx={{ position: "relative" }}>
        <StyledSwiper
          pagination
          slidesPerView="auto"
          slidesOffsetBefore={12}
          slidesOffsetAfter={12}
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              style={{
                width: "85%",
                alignSelf: "stretch",
                height: "auto",
              }}
            >
              <Box p={1} mb={35} height="calc(100% - 35px)">
                <ProductCard product={product} />
              </Box>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </Box>
    </>
  );
};

export default ProductSlider;
