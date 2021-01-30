import React from 'react';
import WorkGrid from '../components/WorkGrid';
import WorkBanner from '../components/WorkBanner';
import ContactModule from '../components/ContactModule';
import ScrollTop from '../components/ScrollTop';

//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const Work = () => {

    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <WorkBanner />
            <section class="work__grid" id="work__section-2">
                <div className="l-default">
                    <WorkGrid />
                </div>
            </section>
            <ContactModule />
            <ScrollTop />
        </motion.div>
    )
}

export default Work;