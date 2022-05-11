import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageSlide from '../components/ImageSlide';
import WebPortfolio from '../helpers/WebPortfolio';
import WebDicoding from '../helpers/WebDicoding';
import '../styles/Portfolio.css';
import 'swiper/css';

const Portfolio = () => {
  const [slidesPerView, setSlidesPerView] = useState(() =>
    window.innerWidth <= 600 ? 1 : window.innerWidth <= 1200 ? 2 : 3
  );

  useEffect(() => {
    function handleResize(e) {
      if (e.srcElement.innerWidth <= 600) {
        setSlidesPerView(1);
      } else if (e.srcElement.innerWidth <= 1200) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='portfolio' id='Portfolio'>
      <span>Recent Projects</span>
      <span>Portfolio Websites</span>
      <Swiper
        slidesPerView={slidesPerView}
        grabCursor={true}
        className='portfolio-slider'
      >
        {WebPortfolio.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ImageSlide
                image={item.image}
                name={item.name}
                githubLink={item.githubLink}
                webLink={item.webLink}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <span>Dicoding's Course Project Websites</span>
      <Swiper
        slidesPerView={slidesPerView}
        grabCursor={true}
        className='portfolio-slider'
      >
        {WebDicoding.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <ImageSlide
                image={item.image}
                name={item.name}
                githubLink={item.githubLink}
                webLink={item.webLink}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Portfolio;
