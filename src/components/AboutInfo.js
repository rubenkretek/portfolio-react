import React from 'react';
//Import images
import building from '../img/about-building.png'

const AboutInfo = () => {
    return (
        <div>
            <section id="about__section-2">
                <div class="row container">

                    <h2 class="heading-xlarge text--light">
                        Design<br />
                        Build <br />
                        Learn
                </h2>
                    <p class="text--light text--lead">
                        I started my career as a UI/UX designer for a small marketing agency,
                        where I dabbled in styling WordPress themes. The developer at said
                        agency left suddenly, leaving me to take over the role and learn all the
                        necessary tools for the job. I’m now comfortable building WordPress
                        templates from scratch, and have managed over 50 bespoke
                        Joomla/Wordpress sites. I love learning new skills and have found that
                        this really motivates me in my work. I’m currently broadening my
                        development skillset by learning React.
                </p>
                </div>
                <div>
                    <img src={building} alt="White square building" />
                </div>
            </section>
        </div>
    )
}

export default AboutInfo;