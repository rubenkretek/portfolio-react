import React from 'react';

const HomeBanner = () => {
    return (
        <div>
            <section class="banner home__banner banner--fullheight">
                <div class="container">
                    <div >
                        <div >
                            <h1 class="heading-xlarge">I hate bad design</h1>
                            <p class="text--banner">
                                I’m Ruben, <span class="text--red">a web designer/developer</span> in
                                West Sussex. I’m a cat person, love all things tech, and am obsessed
                                with cars.
                            </p>
                        </div>
                    </div>
                    <div class="banner__button-container">
                        <a href="#home__section-2" class="button button--icon"><i class="fas fa-caret-down" aria-hidden="true"></i></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeBanner;