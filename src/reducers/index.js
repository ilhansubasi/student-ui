import { combineReducers } from 'redux';
import student from './student';
import file from './file';


export default combineReducers({
    students: student,
    fileStatus: file
});