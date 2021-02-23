import React from 'react';

import { base_url } from '../api';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ContactModule from '../components/ContactModule';
import ScrollTop from '../components/ScrollTop';

//Animations
import { motion } from 'framer-motion';
import { pageAnimation, revTabsAnimation } from '../animation';

//Redux
import { useSelector } from 'react-redux';


const WorkItem = () => {
    //Data
    const work = useSelector((state) => state.item.workItem);

    const featuredStyles = {
        backgroundColor: work.carouselBackground,
    };

    const conclusion = work.conclusion;

    console.log(conclusion);

    return (

        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            {!work.IsLoading && (
                <div>
                    <section className="banner work__banner">
                        <div className="l-default">
                            <div className="work__title">
                                <h1 class="heading-xlarge">{work.companyName}</h1>
                            </div>
                            <div className="work__overview">
                                <div className="work__overview-item">
                                    <h2 className="heading-h3 text--red">Who are they?</h2>
                                    <p className="text--meta">
                                        {work.whoAre}
                                    </p>
                                </div>
                                <div className="work__overview-item">
                                    <h2 className="heading-h3 text--red">The brief</h2>
                                    <ul className="text--meta">
                                        {work.brief.map((briefItem) => (
                                            <BriefListItem
                                                key={briefItem.id}
                                                briefPoint={briefItem.briefPoint}
                                            />
                                        ))}
                                    </ul>
                                </div>
                                <div className="work__overview-item">
                                    <h2 className="heading-h3 text--red">Delivarables</h2>
                                    <ul className="text--meta">
                                        {work.deliverables.map((deliverable) => (
                                            <DeliverablesListItem
                                                key={deliverable.id}
                                                deliverablesPoint={deliverable.deliverablesPoint}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="work__featured" style={featuredStyles}>
                        <div className="work__featured-left">
                            <Tabs className="tabs tabs--work">
                                {work.carouselImages.map((carouselImages) => (
                                    <TabPanel>
                                        <motion.div variants={revTabsAnimation} initial='hidden' animate='show'>
                                            <div className="tabs__image">
                                                <img src={base_url + carouselImages.url} alt={carouselImages.alternativeText} />
                                            </div>
                                        </motion.div>
                                    </TabPanel>
                                ))}
                                <TabList className="tabs__nav">
                                    {work.carouselImages.map((carouselImages, i) => (
                                        <Tab className="tabs__nav-item">
                                            <a className="button">{i + 1}</a>
                                        </Tab>
                                    ))}
                                </TabList>
                            </Tabs>
                        </div>
                        <div className="work__featured-right">
                            <div className="work__featured-content">
                                <h2 className="heading-large">{work.carouselTitle}</h2>
                                <h3>{work.carouselSubtitle}</h3>
                                <div className="work__featured-text" dangerouslySetInnerHTML={{ __html: work.carouselText }}>
                                    { }
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="work__content">
                        <div className="l-default">
                            <h2 className="heading-large">{work.contentTitle}</h2>
                            {work.contentModules.map((contentModules) => (
                                <div className="work__content-container">
                                    <div className="work__content-left">
                                        <div className="work__content-image">
                                            <img src={base_url + contentModules.image.url} alt={contentModules.image.alternativeText} />
                                        </div>
                                    </div>
                                    <div className="work__content-right">
                                        <div className="work__content-title">
                                            <h3>{contentModules.subtitle}</h3>
                                        </div>
                                        <div className="work__content-copy">
                                            <p dangerouslySetInnerHTML={{ __html: contentModules.text }}>
                                                { }
                                            </p>
                                        </div>
                                        {contentModules.link && (
                                            <div className="work__content-link">
                                                <a href={contentModules.link} className="button" target="_blank" rel="noreferrer">{contentModules.linkText}</a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="work__conclusion secondary">
                        <div className="l-default">
                            <div className="work__conclusion-container">
                                <h2 className="heading-large">Finished Product</h2>
                                <div className="work__conclusion-copy text--lead">
                                    <p dangerouslySetInnerHTML={{ __html: work.conclusion.text }}>
                                        { }
                                    </p>
                                </div>
                                <div className="work__conclusion-link">
                                    <a href={work.conclusion.link} className="button" target="_blank" rel="noreferrer">{work.conclusion.linkText}</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <ContactModule />
                </div>
            )}
            <ScrollTop />
        </motion.div>
    )
};


//Brief List item component
const BriefListItem = ({ briefPoint }) => {
    return (
        <li>{briefPoint}</li>
    )
};
//Delivarable List item component
const DeliverablesListItem = ({ deliverablesPoint }) => {
    return (
        <li>{deliverablesPoint}</li>
    )
};


export default WorkItem;