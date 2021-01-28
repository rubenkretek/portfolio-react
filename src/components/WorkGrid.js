import React, { useState } from 'react';
import { workState } from '../workState';
//Page components


const WorkGrid = () => {
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
                                <a href={url} className="button">Read more</a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkGrid;