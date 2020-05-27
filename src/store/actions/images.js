// import { API } from 'aws-amplify';
import * as actionTypes from './actionTypes';
import axios from '../../axiosImages';

export const fetchImagesStart = () => {
    return {
        type: actionTypes.FETCH_IMAGES_START
    }
};

export const fetchImagesSuccess = (data) => {
    return {
        type: actionTypes.FETCH_IMAGES_SUCCESS,
        data
    }
};

export const fetchImagesError = (error) => {
    return {
        type: actionTypes.FETCH_IMAGES_ERROR,
        error
    }
};

export const fetchImages = () => {
    return async dispatch => {
        dispatch(fetchImagesStart());
        axios.get('/photos')
            .then(response => {
                const data = response.data.slice(0, 7)
                dispatch(fetchImagesSuccess(data));
            })
            .catch(error => {
                dispatch(fetchImagesError(error));
            });
    }
};
