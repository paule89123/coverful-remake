import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default (props) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={2}
      centeredSlides={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div style={{height: "70vw", width: "70vw", overflow: "hidden"}}>{props.images[0]}</div></SwiperSlide>
      <SwiperSlide><div style={{height: "70vw", width: "70vw", overflow: "hidden"}}>{props.images[1]}</div></SwiperSlide>
      <SwiperSlide><div style={{height: "70vw", width: "70vw", overflow: "hidden"}}>{props.images[2]}</div></SwiperSlide>
    </Swiper>
  );
};