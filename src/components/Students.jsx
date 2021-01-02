import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Student from './Student';

import { getStudents } from '../actions/student';

const Students = ({ getStudents, students }) => {
    const handleClick = e => {
        e.preventDefault();
        getStudents();
    }

    return (
        <Fragment>
            <button onClick={handleClick}>Get Students</button>

            {students.students.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>DOB</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.students.map(student => (
                            <Student key={student.id} student={student}/>
                        ))}
                    </tbody>
                </table>
            ): <p>No student found...</p>}
        </Fragment>
    )
}

const mapStateToProps = state => ({
    students: state.students
});

export default connect(mapStateToProps, { getStudents })(Students);
