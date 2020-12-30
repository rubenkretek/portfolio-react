import React from 'react';
import '../styles/components/nav.scss';
import { Link } from 'react-router-dom';
import logo from '../img/black-logo.svg';

const Nav = () => {
    return (
        <nav className="main-nav">
            <div className="nav-container">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/work">Work</Link></li>
                    </ul>
                </div>
                <div className="top-bar-center">
                    <Link to="/">
                        <img className="nav-logo" src={logo} alt="Design talk logo" />
                    </Link>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Nav;