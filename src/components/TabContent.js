import React from 'react';
import { base_url } from '../api';
import { Link } from 'react-router-dom';

//Icons
import { FaLongArrowAltRight } from 'react-icons/fa';

//Animations
import { motion, AnimatePresence } from 'framer-motion';

//Redux
import { loadDetail } from '../actions/itemAction';
import { useDispatch } from "react-redux";

const TabContent = ({ id, projectName, thumbnail }) => {

    //Load Details
    const dispatch = useDispatch();
    const loadItemHandler = () => {
        dispatch(loadDetail(id));
    }

    const imageUrl = base_url + thumbnail.url;

    console.log(imageUrl);

    return (
        <>
            <div className="tabs__title">
                <h3 className="heading-medium">{projectName}</h3>
            </div>
            <div className="tabs__link">
                <Link onClick={loadItemHandler} to={`/work/${id}`} className="arrow-link">View project <FaLongArrowAltRight /></Link>
            </div>
            <AnimatePresence exitBeforeEnter>
                <motion.div initial='hidden' animate='show'>
                    <div className="tabs__image">
                        <img src={imageUrl} alt={thumbnail.alternativeText} />
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default TabContent;