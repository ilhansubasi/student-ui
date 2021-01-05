import {
    GET_STUDENTS,
    STUDENT_ERROR
} from '../actions/types';

const initialState = {
    students: [],
    page: 0
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_STUDENTS:
            return {
                ...state,
                students: [...state.students, ...payload],
                page: state.page + 1
            }
        case STUDENT_ERROR:
            alert(payload.msg);
            break;
        default:
            return state;
    }
}