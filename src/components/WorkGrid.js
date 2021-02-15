import React, { useEffect } from 'react';
import WorkGridItem from './WorkGridItem';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadWorks } from "../actions/worksAction";


const WorkGrid = () => {
    // FETCH WORK ITEMS
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadWorks());
    }, [dispatch]);

    // EXTRACT DATA FROM STORE
    const work = useSelector(state => state.work.workItems);


    return (
        <div className="work work--list">
            <div className="work work--list">
                <ul className="work__grid">
                    {work.map((work) => (
                        <WorkGridItem
                            id={work.id}
                            key={work.id}
                            projectName={work.projectName}
                            thumbnail={work.thumbnail[0]}
                            url={work.slug}
                            teaserText={work.teaserText}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default WorkGrid;