import React from 'react';
import { base_url } from '../api';
import { Link } from 'react-router-dom';

//Redux
import { loadDetail } from '../actions/itemAction';
import { useDispatch } from "react-redux";

const WorkGridItem = ({ projectName, thumbnail, url, teaserText, id }) => {

    //Load Details
    const dispatch = useDispatch();
    const loadItemHandler = () => {
        dispatch(loadDetail(id));
    }

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
                            <li key={teaserText.id}>{teaserText.teaserPoint}</li>
                        ))}
                    </ul>
                </div>
                <div className="work__link">
                    <Link onClick={loadItemHandler} to={`/work/${id}`} className="button">Read more</Link>
                </div>
            </div>
        </li>
    )
}

export default WorkGridItem;