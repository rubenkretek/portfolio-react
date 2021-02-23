import React, { useState } from 'react';
import { workState } from '../workState';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

//Icons
import { FaLongArrowAltRight } from 'react-icons/fa';

//Animations
import { motion, AnimatePresence } from 'framer-motion';
import { tabsAnimation } from '../animation';

const AboutWork = () => {
    const [workItems, setWorkItems] = useState(workState);
    return (
        <div>
            <section id="about__section-3" className="about__work">
                <div className="l-default">
                    <div className="about__work-container">
                        <div className="about__work-left">
                            <div>
                                <h2 className="heading-medium">
                                    <span className="text--red-highlight">Communication</span><br />
                                    Is Key
                                    </h2>
                                <p className="text--lead">
                                    I have worked on projects for businesses across a range of industries,
                                    from the independent cafe to the multinational art supplies distributor.
                                </p>
                                <p className="text--lead">
                                    I believe in face-to-face contact being the best way to communicate,
                                    whether in person or online, so I always present my projects directly to
                                    the client.
                                </p>
                                <a href="/work" className="button">My work</a>
                            </div>
                        </div>
                        <div className="about__work-right">

                            <div className="about__work-subtitle">
                                <h2 className="heading-h4 text--red">Examples of work</h2>
                            </div>


                            <Tabs className="tabs tabs--work">
                                {workItems.map(({ projectName, thumbnail, url }) => (
                                    <TabPanel>
                                        <div className="tabs__title">
                                            <h3 className="heading-medium">{projectName}</h3>

                                        </div>
                                        <div className="tabs__link">
                                            <a href={url} className="arrow-link">View project <FaLongArrowAltRight /></a>
                                        </div>
                                        <AnimatePresence exitBeforeEnter>
                                            <motion.div variants={tabsAnimation} initial='hidden' animate='show'>
                                                <div className="tabs__image">
                                                    <img src={thumbnail} alt={thumbnail} />
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </TabPanel>
                                ))}
                                <TabList className="tabs__nav">
                                    {workItems.map((workItems, i) => (
                                        <Tab className="tabs__nav-item">
                                            <a className="button">{i + 1}</a>
                                        </Tab>
                                    ))}
                                </TabList>
                            </Tabs>


                        </div>
                    </div>
                </div>
            </section>

        </div >
    )
}

export default AboutWork;