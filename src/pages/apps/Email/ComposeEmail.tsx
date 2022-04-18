import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// editor
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

// styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// components
import { VerticalForm, FormInput } from '../../../components/form/';

interface ComposeEmailProps {
    isOpen: boolean;
    toggleComposeModal: () => void;
}

const ComposeEmail = ({ isOpen, toggleComposeModal }: ComposeEmailProps) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const schemaResolver = yupResolver(
        yup.object().shape({
            to: yup.string().required('Please specify to email').email('Please enter Email'),
            subject: yup.string().required('Please specify subject'),
        })
    );

    /**
     * Handles the save
     * @param {*} event
     * @param {*} values
     */
    const handleEmailSave = (event: any, values: any) => {
        const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        console.log({ ...values, body });
        toggleComposeModal();
    };

    /**
     * On editor body change
     */
    const onEditorStateChange = (editorStates: React.SetStateAction<EditorState>) => {
        setEditorState(editorStates);
    };

    return (
        <Modal show={isOpen} onHide={toggleComposeModal} centered>
            <Modal.Header closeButton onHide={toggleComposeModal}>
                <Modal.Title as="h5">New Message</Modal.Title>
            </Modal.Header>

            <Modal.Body className="p-3">
                <VerticalForm onSubmit={handleEmailSave} resolver={schemaResolver}>
                    <FormInput
                        label="To"
                        type="email"
                        name="to"
                        placeholder="Example@email.com"
                        containerClass={'mb-2'}
                    />
                    <FormInput
                        label="Subject"
                        type="text"
                        name="subject"
                        placeholder="Your subject"
                        containerClass={'mb-2'}
                    />
                    <div className="mb-2">
                        <label className="form-label">Message</label>
                        <Editor
                            editorState={editorState}
                            onEditorStateChange={onEditorStateChange}
                            toolbarClassName="draft-toolbar"
                            wrapperClassName="react-draft-wrapper  border border-1 rounded-1"
                            editorStyle={{ minHeight: '200px' }}
                            toolbar={{
                                options: ['inline', 'fontSize', 'fontFamily', 'list', 'textAlign', 'link'],
                                inline: { inDropdown: true },
                                list: { inDropdown: true },
                                textAlign: { inDropdown: true },
                                link: { inDropdown: true },
                            }}
                        />
                    </div>
                </VerticalForm>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="light" onClick={toggleComposeModal}>
                    Close
                </Button>
                <Button type="submit">
                    Send <i className="fab fa-telegram-plane ms-1"></i>
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ComposeEmail;
