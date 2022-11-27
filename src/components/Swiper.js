import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Virtual } from "swiper";
import { Swiper } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Virtual]);

export const StyledSwiper = styled(Swiper)`
  --swiper-navigation-size: 25px;
  --swiper-pagination-bullet-horizontal-gap: 5.5px;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-inactive-color: #dbd;
  ----swiper-pagination-color: #f00;
  --swiper-pagination-bullet-inactive-opacity: 1;
  font-size: var(--swiper-pagination-bullet-size);
  line-height: 1;
  .swiper-button {
    &-prev,
    &-next {
      color: #f00;
      font-weight: bold;
    }
    &-disabled {
      visibility: hidden;
    }
  }
  .swiper {
    &-wrapper {
      display: flex;
    }
    &-pagination {
      position: absolute !important;
      bottom: -20px !important;
      left: 0;
      text-align: center;
      width: 100% !important;
      z-index: 10;
    }
  }

  .swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-size);
    height: var(--swiper-pagination-bullet-size);
    background: var(--swiper-pagination-bullet-inactive-color);
    opacity: var(--swiper-pagination-bullet-inactive-opacity);
    border-radius: 50%;
    transition: 0.5s;
    display: inline-block;
    margin-left: var(--swiper-pagination-bullet-horizontal-gap);
    &-active {
      width: 19px !important;
      height: 8px;
      border-radius: 4px;
      box-shadow: 0 5px 6px rgba(151, 153, 203, 0.28);
      background: #f00;
    }
  }
`;

export { SwiperSlide, Swiper } from "swiper/react";
