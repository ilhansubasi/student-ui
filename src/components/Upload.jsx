import React, { Fragment, useState } from 'react';

import { connect } from 'react-redux';
import { uploadFile } from '../actions/file';

function Upload({ uploadFile, fileStatus }) {
    const [file, setFile] = useState('');

    const onChange = e => {
        if(e.target.files[0]) {
            setFile(e.target.files[0]);
        } else{
            setFile(null);
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
                    accept=".xlsx"
                />
                <input
                    type='submit'
                    value='Upload'
                />
            </form>
            {fileStatus.fileProgress > 0 ? 'Percentage: ' + fileStatus.fileProgress : ''}
        </Fragment>
    )   
}

const mapStateToProps = state => ({
    fileStatus: state.fileStatus
});

export default connect(mapStateToProps, { uploadFile })(Upload);