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
                        <li className="nav__item"><Link to="/about">About</Link></li>
                        <li className="nav__item"><Link to="/work">Work</Link></li>
                    </ul>
                </div>
                <div className="top-bar-center">
                    <Link to="/">
                        <img className="nav-logo" src={logo} alt="Design talk logo" />
                    </Link>
                </div>
                <div className="top-bar-right">
                    <ul className="nav__menu">
                        <li className="nav__item"><a href="https://github.com/rubenkretek" target="_blank" rel="noreferrer">GitHub</a></li>
                        <li className="nav__item"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="nav-container--mobile">
                <div className="nav__logo-container">
                    <Link to="/">
                        <img className="nav-logo" src={logo} alt="Design talk logo" />
                    </Link>
                </div>
                <div className={`button_container ${mobileMenu ? "not-active" : "active"}`} id="toggle" onClick={handleMenu}>
                    <span className="top"></span>
                    <span className="middle"></span>
                    <span className="bottom"></span>
                </div>
                <div className={`overlay ${mobileMenu ? "closed" : "open"}`} id="overlay">
                    <nav className="overlay-menu">
                        <ul>
                            <li className="nav__item"><Link to="/about" onClick={handleMenu}>About</Link></li>
                            <li className="nav__item"><Link to="/work" onClick={handleMenu}>Work</Link></li>
                            <li className="nav__item"><Link to="/" onClick={handleMenu}>Home</Link></li>
                            <li className="nav__item"><Link to="/contact" onClick={handleMenu}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </nav>
    )

}

export default Nav;