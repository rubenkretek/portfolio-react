import React from 'react';
import { Link } from 'react-router-dom';

//Icons
import { FaCaretDown } from 'react-icons/fa';

//Images
import introBackground from '../img/home-mountain.jpg';
import dividerBackground from '../img/black-background-mountain.jpg';

//Components
import WorkGrid from '../components/WorkGrid';
import ContactModule from '../components/ContactModule';
import ScrollTop from '../components/ScrollTop';

//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const Home = () => {
    return (
        <motion.div className="home" variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <section className="home__banner">
                <div className="l-default">
                    <div className="banner--full-height">
                        <div className="banner__container">
                            <h1 className="heading-xlarge">I hate bad design</h1>
                            <p className="text--banner">
                                I’m Ruben, <span className="text--red">a web designer/developer</span> in West Sussex. I’m a cat person, love all things tech, and am obsessed with cars.
                        </p>
                        </div>
                        <div className="banner__button">
                            <a href="#home__section-2" className="button button--icon">
                                <FaCaretDown />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home__section-2" className="home__intro" style={{ backgroundImage: `url(${introBackground})` }}>
                <div className="l-default l-default--full-height">
                    <div className="home__intro-container">
                        <div className="home__intro-content">
                            <div className="">
                                <h2 className="heading-large">
                                    Less is <br /><span className="text--red-highlight">More</span>
                                </h2>
                                <p className="text--lead">
                                    My approach to design is minimalistic. I believe it is my duty as a
                                    designer to make my users think as little as possible, and present
                                    them with only what they need. This translates into easy to use,
                                    effective products.
                                </p>
                                <p className="text--lead">
                                    I also follow this mantra when coding, where I try to build things as
                                    simply as possible. I’m a great believer in doing something properly
                                    the first time around, so I think carefully about every decision I
                                    make and imagine what effect it will have in the future.
                                </p>
                                <Link to="/about" className="button">Learn More</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home__section-3" className="home__work secondary">
                <div className="l-default">
                    <div className="home__work-container">
                        <div className="home__work-content">
                            <h2 className="heading-large">Work</h2>
                            <p className="text--lead">
                                Quality work means quality results, which is why I always strive to
                                produce the highest quality work. I’m always looking for ways to
                                improve and new things to learn, and, having worked on projects for a
                                range of industries and clients, I’m ready to take on anything.
                        </p>

                            <a href="#home__section-5" className="button button--secondary button--icon">
                                <FaCaretDown />
                            </a>

                        </div>
                    </div>
                </div>
            </section>
            <section id="home__section-4" className="home__divider" style={{ backgroundImage: `url(${dividerBackground})` }}></section>
            <section id="home__section-5" className="home__portfolio ">
                <div className="l-default">
                    <WorkGrid />
                </div>
            </section>
            <ContactModule />
            <ScrollTop />
        </motion.div>
    )
}

export default Home;