import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { workState } from '../workState';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const WorkItem = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [workItems, setWorkItems] = useState(workState);
    const [work, setWork] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState(null);
    const featuredStyles = {
        backgroundColor: backgroundColor,
    };


    //useEffect
    useEffect(() => {
        const currentWork = workItems.filter((stateWork) => stateWork.url === url);
        setWork(currentWork[0]);
        setBackgroundColor(currentWork[0].carouselBackground);
    }, [workItems, url]);



    return (
        <>
            {work && (
                <div>
                    <section className="banner work__banner">
                        <div className="work__title">
                            <h1>{work.companyName}</h1>
                        </div>
                        <div>
                            <h2>Who are they?</h2>
                            <p>
                                {work.whoAre}
                            </p>
                        </div>
                        <div>
                            <h2>The brief</h2>
                            <ul>
                                {work.brief.map((brief) => (
                                    <BriefListItem
                                        briefPoint={brief.briefPoint}
                                        key={brief.briefPoint}
                                    />
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2>Delivarables</h2>
                            <ul>
                                {work.deliverables.map((deliverables) => (
                                    <DeliverablesListItem
                                        deliverablesPoint={deliverables.deliverablesPoint}
                                        key={deliverables.deliverablesPoint}
                                    />
                                ))}
                            </ul>
                        </div>
                    </section>
                    <section className="work--featured" style={featuredStyles}>
                        <div className="work--featured-left">
                            <Tabs className="image-switcher">
                                {work.carouselImages.map((carouselImages) => (
                                    <TabPanel>
                                        <div className="switcher__image">
                                            <img src={carouselImages.carouselImage} alt={carouselImages.carouselAltText} />
                                        </div>
                                    </TabPanel>
                                ))}
                                <TabList>
                                    {work.carouselImages.map((carouselImages, i) => (
                                        <Tab>
                                            <p>{i + 1}</p>
                                        </Tab>
                                    ))}
                                </TabList>
                            </Tabs>
                        </div>
                        <div className="work--featured-right">
                            <h2>{work.carouselTitle}</h2>
                            <h3>{work.carouselSubtitle}</h3>
                            <p>{work.carouselText}</p>
                        </div>
                    </section>
                    <section class="work__content">
                        <h2>{work.contentTitle}</h2>
                        {work.contentModules.map((contentModules) => (
                            <div className="work__content-container">
                                <div className="work__content-left">
                                    <div className="work__content-image">
                                        <img src={contentModules.contentImg} alt={contentModules.contentImgAltText} />
                                    </div>
                                </div>
                                <div className="work__content-right">
                                    <div className="work__content-title">
                                        <h3>{contentModules.contentSubtitle}</h3>
                                    </div>
                                    <div className="work__content-copy" dangerouslySetInnerHTML={{ __html: contentModules.contentText }}>
                                        {/* HTML content gets parsed here */}
                                    </div>
                                    {contentModules.link && (
                                        <div className="work__content-link">
                                            <a href={contentModules.link}>{contentModules.linkText}</a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </section>
                    <section class="work__conclusion">
                        <h2>Finished Product</h2>
                        <div className="work__conclusion-copy" dangerouslySetInnerHTML={{ __html: work.conclusionText }}>
                            {/* HTML content gets parsed here */}
                        </div>
                        <div className="work__conclusion-link">
                            <a href={work.conclusionLink}>{work.conclusionLinkText}</a>
                        </div>
                    </section>
                </div>
            )}
        </>
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