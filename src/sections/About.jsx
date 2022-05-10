import React from 'react';
import CV from '../assets/cv.pdf';
import '../styles/About.css';

const About = () => {
  return (
    <div className='about' id='About'>
      <div className='leftAbout'>
        <span>About Me</span>
        <span>
          Hi, I'm Wilbert. An undergraduate IT student, currently participating
          in Ruangguru Bootcamp for FrontEnd Web Developer held by Ruangguru and
          Kampus Merdeka. I've been interested in the FrontEnd field since my
          freshman year and started pursuing this route for a year now since I
          join Dicoding's FrontEnd Web learning path. I have experience in using
          HTML, CSS, Javascript, and ReactJS, also experienced in designing with
          Adobe Illustrator and Adobe Photoshop. I'm currently looking for an
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
        <div className='skills'>
          <div className='container'>
            <div className='bar html'>
              <span>HTML</span>
              <span>90%</span>
            </div>
          </div>
          <div className='container'>
            <div className='bar css'>
              <span>CSS</span>
              <span>82%</span>
            </div>
          </div>
          <div className='container'>
            <div className='bar js'>
              <span>JS</span>
              <span>88%</span>
            </div>
          </div>
          <div className='container'>
            <div className='bar react'>
              <span>ReactJS</span>
              <span>85%</span>
            </div>
          </div>
          <div className='container'>
            <div className='bar illustrator'>
              <span>Adobe Illustrator</span>
              <span>90%</span>
            </div>
          </div>
          <div className='container'>
            <div className='bar photoshop'>
              <span>Adobe Photoshop</span>
              <span>80%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
