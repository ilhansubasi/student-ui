import axios from 'axios';

import { 
    SET_UPLOAD_STATUS,
    UPLOAD_ERROR
} from './types';

export const setUploadStatus = (progress) => ({
    type: SET_UPLOAD_STATUS,
    payload: progress
})

export const uploadFile = (file) => async dispatch => {
    try {
        await axios.post(
            '/xlsx/', 
            file,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: progress => {
                    const { loaded, total } = progress;
                    const percentageProgress = Math.floor((loaded / total) * 100);
                    dispatch(setUploadStatus(percentageProgress));
                }
            }
        );
    } catch (error) {
        dispatch({
            type: UPLOAD_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}