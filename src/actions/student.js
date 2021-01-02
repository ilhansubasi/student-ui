import axios from 'axios';

import { 
    GET_STUDENTS,
} from './types';

export const getStudents = () => async dispatch => {
    try {
        const res = await axios.get('/student/');

        dispatch({
            type: GET_STUDENTS,
            payload: res.data.content
        });
    } catch (error) {
        /*dispatch({
            type: STUDENT_ERROR,
            payload: { msg: error.response.statusText, status: err.response.status }
        });*/
        console.error("error! getStudents!");
    }
}