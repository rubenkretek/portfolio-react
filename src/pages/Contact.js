import React from 'react';
//Page components
import ContactButtons from '../components/ContactButtons';
import ScrollTop from '../components/ScrollTop';

//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';


const Contact = () => {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <section id="contact__section-1" className="contact">
                <div className="l-default">
                    <div className="banner banner--work">
                        <div className="banner__container">
                            <div>
                                <h1 className="heading-xlarge">Contact</h1>
                                <p className="text--banner">
                                    Get in touch, whether you want to <span className="text--red">work together</span> or just talk about design.
                            </p>
                                <ContactButtons />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ScrollTop />
        </motion.div>
    )
}

export default Contact;