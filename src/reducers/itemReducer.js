const initialState = { workItem: {} };

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                workItem: action.payload.workItem
            }
        default:
            return { ...state }
    }
}

export default itemReducer;