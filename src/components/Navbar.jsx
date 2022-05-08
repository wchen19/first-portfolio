import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="leftNav">
            <div className="name">Wilbert Chen</div>
            <span>toggle</span>
        </div>
        <div className="rightNav">
            <div className="menuList">
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Portfolio</li>
                    <li>Contact Me</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar