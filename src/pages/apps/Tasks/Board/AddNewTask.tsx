import React from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import { UseFormReturn } from 'react-hook-form';

// components
import MintonDatepicker from '../../../../components/Datepicker';
import { FormInput } from '../../../../components/form/';

interface AddNewTaskProps {
    methods: UseFormReturn<any>;
    newTaskDetails: any;
    newTaskModal: boolean;
    toggleNewTaskModal: () => void;
    handleNewTask: (values: any) => void;
    handleDateChange: (date: Date) => void;
}

const AddNewTask = ({
    methods,
    newTaskDetails,
    newTaskModal,
    toggleNewTaskModal,
    handleNewTask,
    handleDateChange,
}: AddNewTaskProps) => {
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    return (
        <Modal show={newTaskModal} onHide={toggleNewTaskModal} size="lg" centered>
            <Modal.Header closeButton>
                <h4 className="modal-title">Create New Task</h4>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(handleNewTask)} className="px-2">
                    <FormInput
                        name="title"
                        label="Title"
                        placeholder="Enter title"
                        type="text"
                        containerClass="mb-3"
                        className="form-control form-control-light"
                        register={register}
                        key="title"
                        errors={errors}
                        control={control}
                    />

                    <FormInput
                        name="description"
                        label="Description"
                        type="textarea"
                        containerClass="mb-3"
                        className="form-control form-control-light"
                        rows={3}
                        register={register}
                        key="description"
                        errors={errors}
                        control={control}
                    />

                    <Row>
                        <Col md={6}>
                            <FormInput
                                name="priority"
                                label="Priority"
                                type="select"
                                containerClass="mb-3"
                                className="form-select form-control-light"
                                register={register}
                                key="priority"
                                errors={errors}
                                control={control}
                            >
                                <option value="">Select</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </FormInput>
                        </Col>
                        <Col md={6}>
                            <div className="mb-3">
                                <label className="form-label">Due Date</label> <br />
                                <MintonDatepicker
                                    hideAddon
                                    dateFormat="yyyy-MM-dd"
                                    value={newTaskDetails.dueDate}
                                    inputClass="form-control-light"
                                    onChange={(date) => {
                                        handleDateChange(date);
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>

                    <div className="text-end">
                        <Button variant="light" className="me-1" onClick={toggleNewTaskModal}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Create
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default AddNewTask;
