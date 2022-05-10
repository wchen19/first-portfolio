import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='leftNav'>
        <div className='name'>Wilbert Chen</div>
      </div>
      <div className='rightNav'>
        <div className='menuList'>
          <ul>
            <Link spy={true} to='Home' smooth={true} activeClass='activeClass'>
              <li>Home</li>
            </Link>
            <Link spy={true} to='About' smooth={true}>
              <li>About</li>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to='Contact' smooth={true}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
