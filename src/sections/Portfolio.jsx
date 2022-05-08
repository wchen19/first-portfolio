import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import MarvelWeb from '../assets/marvel-web.png';
import BookshelfApp from '../assets/bookshelf-app.png';
import MealRecipe from '../assets/meal-recipe-app.png';
import MovieCatalogue from '../assets/movie-catalogue.png';
import RestaurantApps from '../assets/restaurant-apps.png';
import FriedRice from '../assets/fried-rice-restaurant.png';
import MovieLibrary from '../assets/movie-library.png';
import '../styles/Portfolio.css';
import 'swiper/css';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <span>Recent Projects</span>
      <span>Portfolio Websites</span>
      <Swiper
        spaceBetween={70}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={FriedRice} alt='Fried Rice Restaurant Website' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MovieLibrary} alt='Movie Library Website' />
        </SwiperSlide>
      </Swiper>
      <span>Dicoding's Course Project Websites</span>
      <Swiper
        spaceBetween={70}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={MarvelWeb} alt='Marvel Character Information Website' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BookshelfApp} alt='Bookshelf App Website' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MealRecipe} alt='Meal Recipe App Website' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MovieCatalogue} alt='Movie Catalogue Website' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={RestaurantApps} alt='Restaurant Apps Website' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
