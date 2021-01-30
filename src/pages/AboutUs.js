import React from 'react';
//Page components
import AboutBanner from '../components/AboutBanner';
import AboutInfo from '../components/AboutInfo';
import AboutWork from '../components/AboutWork';
import ScrollTop from '../components/ScrollTop';

//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutUs = () => {
    return (
        <motion.div className="about" variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <AboutBanner />
            <AboutInfo />
            <AboutWork />
            <ScrollTop />
        </motion.div>
    )
}

export default AboutUs;