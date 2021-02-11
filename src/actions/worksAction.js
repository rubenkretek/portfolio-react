import axios from 'axios';
import { allWorksURL } from '../api';

//ACTION CREATOR

export const loadWorks = () => async (dispatch) => {
    //FETCH AXIOS
    const allWorksData = await axios.get(allWorksURL());
    dispatch({
        type: "FETCH_WORKS",
        payload: {
            workItems: allWorksData.data
        }
    })
}