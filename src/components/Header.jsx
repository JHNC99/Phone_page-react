import React, { useState } from 'react'
import logo from '../img/logo.png';
const Header = ({ show }) => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <h3>Phone</h3>
                </div>

                <div className="links">
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#" className="btn">Sign up</a></li>
                    </ul>
                </div>

                <div className="overlay"></div>

                <div className="hamburger-menu" onClick={() => show.setShow(!show.show)} >
                    <div className="bar"></div>
                </div>
            </div>
        </header>
    )
}

export default Header