import {
    GET_STUDENTS,
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
        default:
            return state;
    }
}