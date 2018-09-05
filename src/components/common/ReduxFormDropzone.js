import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class ReduxFormDropzone extends Component {
    state = {
        fileName: ''
    }

    getFileName = name => {
        this.setState({
            fileNmae: name
        })
    }

    render() {
        const {
            input,
            meta,
            dropzoneOnDrop,
        } = this.props;
        const { fileName } = this.state;
        return (
            <div>
                <Dropzone
                    onDrop={(acceptedFiles, rejectedFiles, e) => {
                        input.onChange(acceptedFiles);
                        dropzoneOnDrop && dropzoneOnDrop(acceptedFiles, rejectedFiles, e);
                        this.getFileName(acceptedFiles[0].name);
                    }}
                    value={dropzoneOnDrop}
                >
                <p>Try dropping some files here, or click to select files to upload.</p>
                </Dropzone>
                {fileName && <p>{fileName} uploaded!</p>}
            </div>
        );
    }
}

export default ReduxFormDropzone;