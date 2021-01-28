import React from 'react';
//Page components
import ContactButtons from '../components/ContactButtons';


const Contact = () => {
    return (
        <section id="work__section-1">
            <div className="l-default">
                <div class="banner banner--work">
                    <div class="banner__container">
                        <div>
                            <h1 class="heading-xlarge">Contact</h1>
                            <p class="text--banner">
                                Get in touch, whether you want to <span class="text--red">work together</span> or just talk about design.
                            </p>
                            <ContactButtons />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;