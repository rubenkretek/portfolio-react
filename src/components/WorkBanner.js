import React from 'react';

const WorkBanner = () => {
    return (
        <section id="work__section-1">
            <div className="l-default">
                <div className="banner banner--work">
                    <div className="banner__container">
                        <div>
                            <h1 className="heading-xlarge">Work</h1>
                            <p className="text--banner">
                                From hand coded PHP websites to effective UX designs, I look to improve in all areas of my web skills, <span className="text--red">I take pride in my work,</span> and always look to broaden my skillset with the next project.
                                </p>
                            <a href="#work__section-2" className="button">Discover</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkBanner;