import React from 'react';
//Page components
import AboutBanner from '../components/AboutBanner';
import AboutInfo from '../components/AboutInfo';
import AboutWork from '../components/AboutWork';

const AboutUs = () => {
    return (
        <div className="about">
            <AboutBanner />
            <AboutInfo />
            <AboutWork />
        </div>
    )
}

export default AboutUs;