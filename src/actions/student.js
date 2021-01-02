import axios from 'axios';

import { GET_STUDENTS, STUDENT_ERROR } from './types';

export const getStudents = () => async dispatch => {
    try {
        const res = await axios.get('/student/');

        dispatch({
            type: GET_STUDENTS,
            payload: res.data.content
        });
    } catch (err) {
        /*dispatch({
            type: STUDENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });*/
        console.error("error!");
    }
}