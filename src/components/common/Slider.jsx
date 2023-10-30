import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay]}
        className='mySwiper'
      >
        {/* item 1 */}
        <SwiperSlide>
          <figure className=''>
            <img
              className='border-4 shadow-md h-72 rounded-full'
              src='src/assets/img-11.png'
              alt='nature image '
            />
          </figure>
        </SwiperSlide>

        {/* item 2 */}
        <SwiperSlide>
          <figure className=''>
            <img
              className='border-4 shadow-md h-72 rounded-full'
              src='src/assets/img-11.png'
              alt='nature image '
            />
          </figure>
        </SwiperSlide>

        {/* item 3 */}
        <SwiperSlide>
          <figure className=''>
            <img
              className='border-4 shadow-md h-72 rounded-full'
              src='src/assets/img-11.png'
              alt='nature image '
            />
          </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
