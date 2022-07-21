/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  Container,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.Module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  Navigation, Pagination, Mousewheel, Keyboard,
} from 'swiper';

function CarouselProduct({ oneProduct }) {
  return (
    <Container>
      <Swiper
        cssMode
        navigation
        pagination
        mousewheel
        keyboard
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <div>
          {oneProduct.images
              && oneProduct.images.map((result) => {
                console.log(result);
                return (
                  <SwiperSlide>
                    <div className="card-carousel">
                      <img src={result} style={{ width: '100%', borderRadius: '16px' }} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })
              }
        </div>
      </Swiper>
    </Container>
  );
}

export default CarouselProduct;
