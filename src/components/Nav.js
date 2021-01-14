import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/black-logo.svg';

const Nav = () => {
    const [mobileMenu, setMobileMenu] = useState("false");
    const handleMenu = () => {
        setMobileMenu(!mobileMenu);
    }
    return (
        <nav className="main-nav">
            <div className="nav-container--full">
                <div className="top-bar-left">
                    <ul className="nav__menu">
                        <li class="nav__item"><Link to="/about">About</Link></li>
                        <li class="nav__item"><Link to="/work">Work</Link></li>
                    </ul>
                </div>
                <div className="top-bar-center">
                    <Link to="/">
                        <img className="nav-logo" src={logo} alt="Design talk logo" />
                    </Link>
                </div>
                <div className="top-bar-right">
                    <ul className="nav__menu">
                        <li class="nav__item"><Link to="/">Home</Link></li>
                        <li class="nav__item"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="nav-container--mobile">
                <div className="nav__logo-container">
                    <Link to="/">
                        <img className="nav-logo" src={logo} alt="Design talk logo" />
                    </Link>
                </div>
                <div class={`button_container ${mobileMenu ? "not-active" : "active"}`} id="toggle" onClick={handleMenu}>
                    <span class="top"></span>
                    <span class="middle"></span>
                    <span class="bottom"></span>
                </div>
                <div class={`overlay ${mobileMenu ? "closed" : "open"}`} id="overlay">
                    <nav class="overlay-menu">
                        <ul>
                            <li class="nav__item"><Link to="/about" onClick={handleMenu}>About</Link></li>
                            <li class="nav__item"><Link to="/work" onClick={handleMenu}>Work</Link></li>
                            <li class="nav__item"><Link to="/" onClick={handleMenu}>Home</Link></li>
                            <li class="nav__item"><Link to="/contact" onClick={handleMenu}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </nav>
    )

}

export default Nav;