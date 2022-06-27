import React, { useState } from 'react';
import Slider from 'react-slick';
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import './Carousel.Module.css';

function ImageSlider({ images, slidesToShow = 3 }) {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow,
    centerPadding: '0',
    swipeToSlide: true,
    focusOnSelect: true,
    beforeChange: (current, next) => { return setImageIndex(next); },
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const templateImages = images.map((image, idx) => {
    if (image !== null) {
      return (
        <div
          className={idx === imageIndex ? 'activeSlide' : 'slide'}
          key={image.id}
        >
          <div className="slideWrapper">
            {image.code ? image.code : <img src={image.src} alt={image.alt} />}
          </div>
        </div>
      );
    }
    return null;
  });

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slider {...settings}>{templateImages}</Slider>;
}

export default ImageSlider;
