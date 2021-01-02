import React, { Fragment } from 'react';

function Student({ student }) {
    return (
        <Fragment>
            <tr>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.dob}</td>
                <td>{student.gender}</td>
            </tr>
        </Fragment>
    )
}

export default Student;
