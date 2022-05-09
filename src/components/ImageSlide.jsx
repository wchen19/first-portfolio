import React from 'react';
import '../styles/ImageSlide.css';

const ImageSlide = ({ image, name, githubLink, webLink }) => {
  return (
    <div className='card'>
      <img src={image} alt={name} />
      <div className='card-content'>
        <h2>{name}</h2>
        <div className='button'>
          <a href={githubLink} target='_blank' rel='noreferrer'>
            <button>Github</button>
          </a>
          <a href={webLink} target='_blank' rel='noreferrer'>
            <button>Website</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageSlide;
