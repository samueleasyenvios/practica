import React, { useState } from 'react';
import { Card, Row, Col, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import FileUploader, { FileType } from '../../../../components/FileUploader';

const Attachments = () => {
    const [selectedFiles, setSelectedFiles] = useState<FileType[]>([]);

    /**
     * Handled the accepted files and shows the preview
     */
    const handleAcceptedFiles = (files: FileType[]) => {
        var allFiles = files;

        (files || []).map((file) =>
            Object.assign(file, {
                preview: file['type'].split('/')[0] === 'image' ? URL.createObjectURL(file) : null,
                formattedSize: formatBytes(file.size),
            })
        );
        allFiles = [...selectedFiles];
        allFiles.push(...files);
        setSelectedFiles(allFiles);
    };

    /**
     * Formats the size
     */
    const formatBytes = (bytes: number, decimals: number = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };

    /*
     * Removes the selected file
     */
    const removeFile = (fileIndex: number) => {
        const newFiles = [...selectedFiles];
        newFiles.splice(fileIndex, 1);
        setSelectedFiles(newFiles);
    };

    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle as="a" className="text-muted cursor-pointer">
                        <i className="mdi mdi-dots-horizontal font-18"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <i className="mdi mdi-attachment me-1"></i>Attachment
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <i className="mdi mdi-pencil-outline me-1"></i>Edit
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <i className="mdi mdi-content-copy me-1"></i>Mark as Duplicate
                        </Dropdown.Item>
                        <Dropdown.Divider as="div" />
                        <Dropdown.Item className="text-danger">
                            <i className="mdi mdi-delete-outline me-1"></i>Delete
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h5 className="header-title mb-3">Attachments</h5>

                <Row>
                    <Col md={6}>
                        <div>
                            <FileUploader
                                showPreview={false}
                                onFileUpload={(acceptedFiles) => handleAcceptedFiles(acceptedFiles)}
                            />
                        </div>
                    </Col>

                    <Col sm={6}>
                        <div className="mt-4 mt-md-0">
                            {/* Files */}
                            <div className="dropzone-previews" id="filePreview">
                                {selectedFiles &&
                                    selectedFiles.length > 0 &&
                                    (selectedFiles || []).map((f, i) => {
                                        return (
                                            <Card className="border mb-2" key={i + '-file'}>
                                                <div className="p-2">
                                                    <Row className="align-items-center">
                                                        {f.preview && (
                                                            <Col className="col-auto">
                                                                <img
                                                                    data-dz-thumbnail=""
                                                                    className="avatar-sm rounded bg-light"
                                                                    alt={f.name}
                                                                    src={f.preview}
                                                                />
                                                            </Col>
                                                        )}
                                                        {!f.preview && (
                                                            <Col className="col-auto">
                                                                <div className="avatar-sm">
                                                                    <span className="avatar-title badge-soft-primary text-primary rounded">
                                                                        {f.type.split('/')[1]}
                                                                    </span>
                                                                </div>
                                                            </Col>
                                                        )}
                                                        <Col className="ps-0">
                                                            <Link to="#" className="text-muted fw-semibold">
                                                                {f.name}
                                                            </Link>
                                                            <p className="mb-0 font-12">{f.formattedSize}</p>
                                                        </Col>
                                                        <Col className="col-auto">
                                                            <Link to="#" className="btn btn-link font-16 text-muted">
                                                                <i className="fe-x" onClick={() => removeFile(i)}></i>
                                                            </Link>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Card>
                                        );
                                    })}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Attachments;
