import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../imgBanner/banner.png'
import banner2 from '../imgBanner/bannerbolsa.jpg'
import banner3 from '../imgBanner/bannerRost.jpg'


export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={banner2}
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

