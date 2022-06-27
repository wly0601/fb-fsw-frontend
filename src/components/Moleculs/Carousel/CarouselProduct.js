import React from 'react';
import {
  Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.Module.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function CarouselProduct() {
  return (
    <>
      <Container>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='card-carousel'>
              <img src={process.env.PUBLIC_URL + '/images/img_watch_one.jpg'} style={{ width: '100%', borderRadius: '16px' }} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card-carousel'>
              <img src={process.env.PUBLIC_URL + '/images/img_watch_two.jpg'} style={{ width: '100%', borderRadius: '16px' }} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card-carousel'>
              <img src={process.env.PUBLIC_URL + '/images/img_watch_three.jpg'} style={{ width: '100%', borderRadius: '16px' }} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card-carousel'>
              <img src={process.env.PUBLIC_URL + '/images/img_watch_four.jpg'} style={{ width: '100%', borderRadius: '16px' }} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card-carousel'>
              <img src={process.env.PUBLIC_URL + '/images/img_watch_five.jpg'} style={{ width: '100%', borderRadius: '16px' }} alt='' />
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  )
}

export default CarouselProduct;
