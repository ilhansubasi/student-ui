import axios from 'axios';
import download from "downloadjs";
import { 
    SET_UPLOAD_STATUS,
    UPLOAD_ERROR,
    DOWNLOAD_FILE,
    DOWNLOAD_ERROR
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

export const downloadFile = () => async dispatch => {
    try {
        console.log("++++++++");
        const res = await axios.get(
            '/xlsx/',
            {
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Accept': 'application/octet-stream',
                    'Content-Disposition': 'attachment; filename=students.xlsx',
                    'Transfer-Encoding': 'chunked'
                }
            }
        );
        download(res.data, 'students.xlsx');
        dispatch({
            type: DOWNLOAD_FILE,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: DOWNLOAD_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}