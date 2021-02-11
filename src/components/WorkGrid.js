import React, { useState, useEffect } from 'react';
import { workState } from '../workState';
import { Link } from 'react-router-dom';

// Redux
import { useDispatch } from "react-redux";
import { loadWorks } from "../actions/worksAction";


const WorkGrid = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadWorks());
    });
    const [workItems, setWorkItems] = useState(workState);
    return (
        <div className="work work--list">
            <ul className="work__grid">
                {workItems.map(({ projectName, thumbnail, url, teaserText }) => (
                    <li>
                        <div className="work__card">
                            <div className="work__image">
                                <img src={thumbnail} alt="companyName" />
                            </div>
                            <div className="work__title">
                                <h3>{projectName}</h3>
                            </div>
                            <div className="work__copy">
                                <ul>
                                    {teaserText.map((teaserText) => (
                                        <li>{teaserText}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="work__link">
                                <Link to={url} className="button">Read more</Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkGrid;