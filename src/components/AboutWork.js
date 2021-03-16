import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Components
import TabContent from './TabContent';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadWorks } from "../actions/worksAction";


const AboutWork = () => {
    // FETCH WORK ITEMS
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadWorks());
    }, [dispatch]);


    // EXTRACT DATA FROM STORE
    const work = useSelector(state => state.work.workItems);

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
                            <Tabs defaultIndex={0} className="tabs tabs--work">
                                {work.map((workItem) => (
                                    <TabPanel key={workItem.id}>
                                        <TabContent
                                            key={workItem.id}
                                            id={workItem.id}
                                            projectName={workItem.projectName}
                                            thumbnail={workItem.thumbnail[0]}
                                        />
                                    </TabPanel>
                                ))}
                                <TabList className="tabs__nav">
                                    {work.map((workItem, i) => (
                                        <Tab key={workItem.id} className="tabs__nav-item">
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