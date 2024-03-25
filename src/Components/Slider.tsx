import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./images/images.jpg" alt="doctor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/images (1).jpg" alt="doctor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/images (2).jpg" alt="doctor" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
