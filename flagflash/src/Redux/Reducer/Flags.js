import * as Types from "../Action/Types";

const initialState = {
    flags: [],
    search: ''
};

const handleFlagList = (state, action) => {
    let newState = {
        ...state
    };
    console.log("Action", action)
    if (action.result.data !== undefined) {
        newState = Object.assign({}, state, {
            flags: [...action.result.data.Flag],
        });
    }
    console.log("NEW STATE", newState)
    return {
        ...newState
    };
};




const flagReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case Types.FETCH_FLAGS:
            return state
        case Types.FETCH_FLAGS_SUCCESS:
            return handleFlagList(state, action);
        case Types.FETCH_FLAGS_ERROR:
            return state;
        case Types.SEARCH_FLAG:
            return {
                ...state,
                search: action.search
            }
        default:
            return state;
    }
}

export default flagReducer;