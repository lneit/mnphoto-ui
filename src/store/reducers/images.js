import * as actionTypes from '../actions/actionTypes';

const initState = {
    data: null,
    error: null,
    loading: true
};

const reducer = (state=initState, action) => {
    if (action.type === actionTypes.FETCH_IMAGES_SUCCESS) {
        return {
            ...state,
            data: action.data,
            error: null,
            loading: false
        }
    } else if (action.type === actionTypes.FETCH_IMAGES_ERROR) {
        return {
            ...state,
            error: action.error
        }
    }
    return state;
};

export default reducer;