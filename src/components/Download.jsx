import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { downloadFile } from '../actions/file';

function Download({ downloadFile }) {

    const handleClick = e => {
        e.preventDefault();
        console.log("farklı birşeyler");
        downloadFile();
    }

    return (
        <Fragment>
            <div className="text-center" className="m-3 text-center">
                <Button variant="primary" onClick={handleClick} download="students.xlsx">Download all students</Button>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    fileStatus: state.fileStatus
});

export default connect(mapStateToProps, { downloadFile })(Download);