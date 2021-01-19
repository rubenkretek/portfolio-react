import React from 'react';

//images
import backgroundImage from '../img/rainbow.jpg';

//Icons
import { GrMail } from 'react-icons/gr';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const ContactModule = () => {
    return (

        <section class="contact-module" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="l-default">
                <div class="contact-module__container">
                    <div class="contact-module__text">
                        <h2 class="heading-xlarge contact-module__heading">
                            <div>Let's</div>
                            <div>work</div>
                            <div className="highlight-container">
                                <span class="text--red-highlight contact-module__highlight">together</span>
                            </div>
                        </h2>
                        <p class="text--lead">Quality work means quality results, which is why I always strive to produce the highest quality work. I’m always looking for ways to improve and new things to learn, and, having worked on projects for a range of industries and clients, I’m ready to take on anything.</p>
                    </div>
                    <div class="contact-module__buttons">
                        <a class="button button--icon" href="mailto:ruben@design-talk.co.uk" rel="noreferrer">
                            <GrMail />
                        </a>

                        <a class="button button--icon" href="https://www.linkedin.com/in/ruben-kretek-ab296b13b/" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>

                        <a class="button button--icon" href="https://github.com/rubenkretek" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>


        </section>

    )
}

export default ContactModule;