import {
    GET_STUDENTS,
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
        default:
            return state;
    }
}