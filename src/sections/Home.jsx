import React from 'react';
import '../styles/Home.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Profile from '../assets/profile.png';
import Webdev from '../assets/webdev.png';

const Home = () => {
  return (
    <div className='home'>
      <div className='leftHome'>
        <div className='welcome'>
          <span>Welcome to</span>
          <span>Wilbert Chen's Portfolio</span>
        </div>
        <div className='icons'>
          <a href='https://github.com/wchen19' target='_blank' rel='noreferrer'>
            <GitHubIcon />
          </a>
          <a
            href='https://www.linkedin.com/in/wilbert-chen-ab456320a/'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon />
          </a>
          <a
            href='https://instagram.com/wbertchen'
            target='_blank'
            rel='noreferrer'
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className='rightHome'>
        <img src={Profile} alt='Profile' />
        <div className='floatingCard'>
          <img src={Webdev} alt='' />
          <span>
            Front-End
            <br />
            Developer
          </span>
        </div>
        <div className='blur1'></div>
        <div className='blur2'></div>
      </div>
    </div>
  );
};

export default Home;
