import {
    GET_STUDENTS,
    STUDENT_ERROR
} from '../actions/types';

const initialState = {
    students: []
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_STUDENTS:
            return {
                ...state,
                students: payload
            }
        case STUDENT_ERROR:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}