const initState = {
    workItems: [],
}

const workReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_WORKS":
            return { ...state, workItems: action.payload.workItems }
        default:
            return { ...state }
    }
}

export default workReducer;