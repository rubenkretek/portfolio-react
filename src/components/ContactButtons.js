import React from 'react';

//Icons
import { GrMail } from 'react-icons/gr';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const ContactButtons = () => {
    return (
        <div className="contact-buttons">
            <a className="button button--icon" href="mailto:ruben@design-talk.co.uk" rel="noreferrer">
                <GrMail />
            </a>

            <a className="button button--icon" href="https://www.linkedin.com/in/ruben-kretek-ab296b13b/" target="_blank" rel="noreferrer">
                <FaLinkedin />
            </a>

            <a className="button button--icon" href="https://github.com/rubenkretek" target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
        </div>
    )
}

export default ContactButtons;