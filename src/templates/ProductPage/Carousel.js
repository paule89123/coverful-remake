import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
require('swiper/swiper.scss');
require('swiper/components/navigation/navigation.scss');
require('swiper/components/pagination/pagination.scss');
require('swiper/components/scrollbar/scrollbar.scss');

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default (props) => {
  return (
    <div className="outer-swiper-wrapper">
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div>{props.images[0]}</div></SwiperSlide>
      <SwiperSlide><div>{props.images[1]}</div></SwiperSlide>
      <SwiperSlide><div>{props.images[2]}</div></SwiperSlide>
    </Swiper>
    </div>
  );
};