import {
    SET_UPLOAD_STATUS,
    UPLOAD_ERROR
} from '../actions/types';

const initialState = {
    fileProgress: 0
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_UPLOAD_STATUS:
            return {
                ...state,
                fileProgress: payload
            }
        case UPLOAD_ERROR:
            alert(payload.msg);
        default:
            return state;
    }
}