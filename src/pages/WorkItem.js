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
                                        {work.brief.map((brief) => (
                                            <BriefListItem
                                                briefPoint={brief.briefPoint}
                                                key={brief.briefPoint}
                                            />
                                        ))}
                                    </ul>
                                </div>
                                <div className="work__overview-item">
                                    <h2 className="heading-h3 text--red">Delivarables</h2>
                                    <ul className="text--meta">
                                        {work.deliverables.map((deliverables) => (
                                            <DeliverablesListItem
                                                deliverablesPoint={deliverables.deliverablesPoint}
                                                key={deliverables.deliverablesPoint}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="work__featured" style={featuredStyles}>
                        <div className="work__featured-left">
                            <Tabs className="tabs tabs--work-item">
                                {work.carouselImages.map((carouselImages) => (
                                    <TabPanel>
                                        <div className="tabs__image">
                                            <img src={carouselImages.carouselImage} alt={carouselImages.carouselAltText} />
                                        </div>
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
                                <p>{work.carouselText}</p>
                            </div>
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