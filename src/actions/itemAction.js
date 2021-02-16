import axios from "axios";
import { workItemURL } from '../api';

export const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(workItemURL(id));
    dispatch({
        type: "GET_DETAIL",
        payload: {
            workItem: detailData.data,
        }
    });
}

