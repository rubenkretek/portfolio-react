import React from 'react';

//images
import backgroundImage from '../img/rainbow.jpg';
import ContactButtons from '../components/ContactButtons';


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
                    <ContactButtons />
                </div>
            </div>


        </section>

    )
}

export default ContactModule;