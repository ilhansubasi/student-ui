import axios from 'axios';

import { 
    GET_STUDENTS,
    INC_PAGE
} from './types';

export const incPage = () => {
    return {
        type: INC_PAGE,
    };
};

export const getStudents = (page) => async dispatch => {
    try {

        const res = await axios.get(`/student/?pageNo=${page}`);

        dispatch({
            type: GET_STUDENTS,
            payload: res.data.content
        });

        dispatch(incPage());
    } catch (error) {
        /*dispatch({
            type: STUDENT_ERROR,
            payload: { msg: error.response.statusText, status: err.response.status }
        });*/
        console.error("error! getStudents!");
    }
}