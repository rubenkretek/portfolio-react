import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { workState } from '../workState';


const WorkItem = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [workItems, setWorkItems] = useState(workState);
    const [work, setWork] = useState(null);

    //useEffect
    useEffect(() => {
        const currentWork = workItems.filter((stateWork) => stateWork.url === url);
        setWork(currentWork[0]);
        console.log(workItems);
    }, [workItems, url]);
    return (
        <>
            {work && (
                <div>
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
                </div>
            )
            }
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