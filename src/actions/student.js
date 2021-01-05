import axios from 'axios';

import { 
    GET_STUDENTS,
    INC_PAGE,
    STUDENT_ERROR
} from './types';

export const incPage = () => {
    return {
        type: INC_PAGE,
    };
};

export const getStudents = (page) => async dispatch => {
    try {

        const res = await axios.get(`https://students-restfull-api.herokuapp.com/student/?pageNo=${page}`);

        dispatch({
            type: GET_STUDENTS,
            payload: res.data.content
        });

        dispatch(incPage());
    } catch (error) {
        dispatch({
            type: STUDENT_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}