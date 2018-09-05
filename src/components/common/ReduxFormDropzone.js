import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class ReduxFormDropzone extends Component {
    state = {
        fileName: ''
    }

    getFileName = name => {
        this.setState({
            fileName: name
        })
    }

    render() {
        const {
            input,
            dropzoneOnDrop,
        } = this.props;
        const { fileName } = this.state;
        return (
            <div className="drop-zone">
                <Dropzone
                    onDrop={(acceptedFiles, rejectedFiles, e) => {
                        input.onChange(acceptedFiles);
                        dropzoneOnDrop && dropzoneOnDrop(acceptedFiles, rejectedFiles, e);
                        this.getFileName(acceptedFiles[0].name);
                    }}
                    className="drop-zone__field"
                >
                {!fileName && <span className="drop-zone__placeholder">Try dropping some files here, or click to select files to upload.</span>}
                {fileName && <span className="drop-zone__sucess">{fileName} uploaded!</span>}
                </Dropzone>
            </div>
        );
    }
}

export default ReduxFormDropzone;