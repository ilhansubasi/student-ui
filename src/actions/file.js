import axios from 'axios';

import { 
    SET_UPLOAD_STATUS
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
        console.log("success!");
    } catch (error) {
        console.error("error!");
    }
}