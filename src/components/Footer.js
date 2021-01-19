import React from 'react';
import { Link } from 'react-router-dom';

//images
import FooterLogo from '../img/white-logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top secondary">
                <img className="footer__image" src={FooterLogo} alt="White logo" />
                <a href="mailto:ruben@design-talk.co.uk" className="footer__email heading-h2">ruben@design-talk.co.uk</a>
            </div>

            <div className="footer__bottom secondary">
                <ul className="footer__links">
                    <li>
                        <a href="https://www.linkedin.com/in/ruben-kretek-ab296b13b/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/work">Work</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;