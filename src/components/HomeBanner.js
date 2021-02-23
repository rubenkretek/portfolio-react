import React from 'react';

const HomeBanner = () => {
    return (
        <div>
            <section className="banner home__banner banner--fullheight">
                <div className="container">
                    <div >
                        <div >
                            <h1 className="heading-xlarge">I hate bad design</h1>
                            <p className="text--banner">
                                I’m Ruben, <span className="text--red">a web designer/developer</span> in
                                West Sussex. I’m a cat person, love all things tech, and am obsessed
                                with cars.
                            </p>
                        </div>
                    </div>
                    <div className="banner__button-container">
                        <a href="#home__section-2" className="button button--icon"><i className="fas fa-caret-down" aria-hidden="true"></i></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeBanner;