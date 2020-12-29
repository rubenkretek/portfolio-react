import React from 'react';

const AboutBanner = () => {
    return (
        <div>
            <section id="about__section-1" class="banner about__banner">
                <div class="container">
                    <div class="row banner__content-container">
                        <div>
                            <h1 class="heading-xlarge">About</h1>
                            <p class="text--banner">
                                I live in West Sussex with my partner, two cats, and my 2004 Mini
                                Cooper S. My goal in life is to improve people’s lives through <span class="text--red">good
                                design.</span></p>
                            <a href="#about__section-2" class="button">Discover</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutBanner;