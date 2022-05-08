import React from 'react';
import CV from '../assets/cv.pdf';
import '../styles/About.css';

const About = () => {
  return (
    <div className='about'>
      <div className='leftAbout'>
        <span>About Me</span>
        <span>
          Hi, I'm Wilbert. An undergraduate IT student, currently participating
          in Ruangguru Bootcamp for FrontEnd Web Developer held by Ruangguru and
          Kampus Merdeka. I've been interested in the FrontEnd field since my
          freshman year and started pursuing this route for a year now since I
          join Dicoding's FrontEnd Web learning path. I have experience in using
          HTML, CSS, Javascript, also ReactJS. I'm currently looking for an
          internship for FrontEnd developer, to know more about me
        </span>
        <span>
          <a href={CV} download>
            <button className='cv'>Download my CV</button>
          </a>{' '}
          or <button className='contact'>Contact Me</button>
        </span>
      </div>
      <div className='rightAbout'>
        <div className='skills'></div>
      </div>
    </div>
  );
};

export default About;
