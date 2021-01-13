import React from 'react';
import '../styles/components/_nav.scss';
import { Link } from 'react-router-dom';
import logo from '../img/black-logo.svg';

const Nav = () => {
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
        </nav>
    )

}

export default Nav;