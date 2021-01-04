import React, { Fragment, useState } from 'react';

import { connect } from 'react-redux';
import { uploadFile } from '../actions/file';
import Button from 'react-bootstrap/Button';

function Upload({ uploadFile, fileStatus }) {
    const [file, setFile] = useState('');
    const [uploadButton, setUploadButton] = useState(true);

    const onChange = e => {
        if(e.target.files[0]) {
            setFile(e.target.files[0]);
        } else{
            setFile(null);
        }

        if(file) {
            setUploadButton(true);
        } else {
            setUploadButton(false);
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        uploadFile(formData);
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <input
                    type='file'
                    onChange={onChange}
                    className="m-2"
                    accept=".xlsx"
                />
                <Button type='submit' variant="primary" className="m-2" disabled={uploadButton}>Upload</Button>
            </form>
            {fileStatus.fileProgress > 0 ? 'Percentage: ' + fileStatus.fileProgress : ''}
        </Fragment>
    )   
}

const mapStateToProps = state => ({
    fileStatus: state.fileStatus
});

export default connect(mapStateToProps, { uploadFile })(Upload);