import React from 'react';
import { connect } from 'react-redux';
import Student from './Student';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'

import { getStudents } from '../actions/student';

const Students = ({ getStudents, students }) => {
    const handleClick = e => {
        e.preventDefault();
        getStudents(students.page);
    }

    return (
        <div>
            {students.students.length > 0 ? (
                <Table striped bordered hov>
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
                </Table>
            ): <p>No student found...</p>}

            <Button variant="primary" onClick={handleClick}>Get Students</Button>
        </div>
    )
}

const mapStateToProps = state => ({
    students: state.students
});

export default connect(mapStateToProps, { getStudents })(Students);
