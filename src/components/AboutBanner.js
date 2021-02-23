import React from 'react';

const AboutBanner = () => {
    return (
        <section id="about__section-1">
            <div className="l-default">
                <div className="banner banner--about">
                    <div className="banner__container">
                        <div>
                            <h1 className="heading-xlarge">About</h1>
                            <p className="text--banner">
                                I live in West Sussex with my partner, two cats, and my 2004 Mini
                                Cooper S. My goal in life is to improve people’s lives through <span className="text--red">good
                                design.</span></p>
                            <a href="#about__section-2" className="button">Discover</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutBanner;