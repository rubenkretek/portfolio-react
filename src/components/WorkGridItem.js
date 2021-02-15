import React from 'react';
import { base_url } from '../api';
import { Link } from 'react-router-dom';

const workGridItem = ({ projectName, thumbnail, url, teaserText }) => {
    const imageUrl = base_url + thumbnail.url;
    return (

        <li>
            <div className="work__card">
                <div className="work__image">
                    <img src={imageUrl} alt="companyName" />
                </div>
                <div className="work__title">
                    <h3>{projectName}</h3>
                </div>
                <div className="work__copy">
                    <ul>
                        {teaserText.map((teaserText) => (
                            <li>{teaserText.teaserPoint}</li>
                        ))}
                    </ul>
                </div>
                <div className="work__link">
                    <Link to={url} className="button">Read more</Link>
                </div>
            </div>
        </li>


    )
}

export default workGridItem;