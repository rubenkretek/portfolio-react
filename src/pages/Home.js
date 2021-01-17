import React from 'react';

//Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

//Import images
import introBackground from '../img/home-mountain.jpg';


const Home = () => {
    return (
        <div className="home">
            <section className="home__banner">
                <div className="l-default">
                    <div className="banner--full-height">
                        <div class="banner__container">
                            <h1 class="heading-xlarge">I hate bad design</h1>
                            <p class="text--banner">
                                I’m Ruben, <span class="text--red">a web designer/developer</span> in West Sussex. I’m a cat person, love all things tech, and am obsessed with cars.
                        </p>
                        </div>
                        <div class="banner__button">
                            <a href="#home__section-2" class="button button--icon">
                                <FontAwesomeIcon icon={faCaretDown} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home__section-2" class="home__intro" style={{ backgroundImage: `url(${introBackground})` }}>
                <div className="l-default l-default--full-height">
                    <div class="home__intro-container">
                        <div class="home__intro-content">
                            <div class="">
                                <h2 class="heading-large">
                                    Less is <br /><span class="text--red-highlight">More</span>
                                </h2>
                                <p class="text--lead">
                                    My approach to design is minimalistic. I believe it is my duty as a
                                    designer to make my users think as little as possible, and present
                                    them with only what they need. This translates into easy to use,
                                    effective products.
                                </p>
                                <p class="text--lead">
                                    I also follow this mantra when coding, where I try to build things as
                                    simply as possible. I’m a great believer in doing something properly
                                    the first time around, so I think carefully about every decision I
                                    make and imagine what effect it will have in the future.
                                </p>
                                <a href="/about.html" class="button">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home__section-3" class="home__work secondary">
                <div className="l-default">

                    <div class="home__work-container">
                        <div class="home__work-content">
                            <h2 class="heading-large">Work</h2>
                            <p class="text--lead">
                                Quality work means quality results, which is why I always strive to
                                produce the highest quality work. I’m always looking for ways to
                                improve and new things to learn, and, having worked on projects for a
                                range of industries and clients, I’m ready to take on anything.
                        </p>

                            <a href="#home__section-5" class="button button--secondary button--icon">
                                <FontAwesomeIcon icon={faCaretDown} />
                            </a>

                        </div>
                    </div>




                </div>
            </section>
        </div>
    )
}

export default Home;