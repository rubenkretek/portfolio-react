import React from 'react';
import WorkGrid from '../components/WorkGrid';
import WorkBanner from '../components/WorkBanner';
import ContactModule from '../components/ContactModule';


const Work = () => {

    return (
        <>
            <WorkBanner />
            <section class="work__grid" id="work__section-2">
                <div className="l-default">
                    <WorkGrid />
                </div>
            </section>
            <ContactModule />
        </>
    )
}

export default Work;