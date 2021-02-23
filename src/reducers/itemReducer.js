const initialState = {
    workItem: {
        brief: [],
        deliverables: [],
        carouselImages: [],
        contentModules: [],
        conclusion: [],
        isLoading: true
    }
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                workItem: action.payload.workItem,
                isLoading: false,
            }
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: true,
            }
        default:
            return { ...state }
    }
}

export default itemReducer;