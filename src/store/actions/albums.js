import { API } from 'aws-amplify';
import * as actionTypes from './actionTypes';

export const fetchAlbumsStart = () => {
    return {
        type: actionTypes.FETCH_ALBUMS_START
    }
};

export const fetchAlbumsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_ALBUMS_SUCCESS,
        data
    }
};

export const fetchAlbumsError = (error) => {
    return {
        type: actionTypes.FETCH_ALBUMS_ERROR,
        error
    }
};

export const fetchAlbums = () => {
    return async dispatch => {
        try {
            dispatch(fetchAlbumsStart());
            const data = await API.get("albums" , "/albums");
            dispatch(fetchAlbumsSuccess(data));
        } catch (error) {
            dispatch(fetchAlbumsError(error));
        }
    }
};
