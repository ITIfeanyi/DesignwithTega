import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./Swiper.css";

import slide from "../../img/largeSwiper.jpg";
import slide1 from "../../img/largeSwiper1.jpg";
import slide2 from "../../img/largeSwiper2.jpg";
import slide3 from "../../img/largeSwiper3.jpg";
import slide4 from "../../img/largeSwiper4.jpg";
import slide5 from "../../img/largeSwiper5.jpg";
import slide6 from "../../img/largeSwiper6.jpg";
import slide7 from "../../img/largeSwiper7.jpg";
import slide8 from "../../img/largeSwiper8.jpg";
import slide9 from "../../img/largeSwiper9.jpg";

SwiperCore.use([Navigation, Pagination]);
const SwiperBox = () => {
  return (
    <div>
      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          <Swiper tag='section' wrapperTag='ul' id='main' navigation pagination>
            <SwiperSlide tag='li' key={1}>
              <img
                className='swiper_img'
                style={{ listStyle: "none" }}
                src={slide}
                alt='slide1'
              />
            </SwiperSlide>
            <SwiperSlide tag='li' key={2}>
              <img
                className='swiper_img'
                style={{ listStyle: "none" }}
                src={slide1}
                alt='slide'
              />
            </SwiperSlide>
            <SwiperSlide tag='li' key={3}>
              <img
                className='swiper_img'
                style={{ listStyle: "none" }}
                src={slide2}
                alt='slide'
              />
            </SwiperSlide>
            <SwiperSlide tag='li' key={10}>
              <img
                className='swiper_img'
                style={{ listStyle: "none" }}
                src={slide3}
                alt='slide'
              />
            </SwiperSlide>
            <SwiperSlide tag='li' key={4}>
              <img
                className='swiper_img'
                style={{ listStyle: "none" }}
                src={slide4}
                alt='slide'
              />
            </SwiperSlide>

            <SwiperSlide tag='li' key={5}>
              <img
                className='swiper_img'
                style={{ listStyle: "none" }}
                src={slide5}
                alt='slide'
              />
            </SwiperSlide>

            <SwiperSlide tag='li' key={6}>
              <img
                className='swiper_img'
                style={{ listStyle: "none" }}
                src={slide6}
                alt='slide'
              />
            </SwiperSlide>
            <SwiperSlide tag='li' key={7}>
              <img
                className='swiper_img'
                style={{ listStyle: "none" }}
                src={slide7}
                alt='slide'
              />
            </SwiperSlide>
            <SwiperSlide tag='li' key={8}>
              <img
                className='swiper_img'
                style={{ listStyle: "none" }}
                src={slide8}
                alt='slide'
              />
            </SwiperSlide>
            <SwiperSlide tag='li' key={9}>
              <img
                className='swiper_img'
                style={{ listStyle: "none" }}
                src={slide9}
                alt='slide1'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperBox;
