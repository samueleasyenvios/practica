import React from 'react';
import { Row, Col, Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// dummy data
import { TaskItems } from './data';

interface TaskProps {
    task: TaskItems;
}

const Task = ({ task }: TaskProps) => {
    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle as="a" className="cursor-pointer text-muted">
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

                <p className="text-primary">{task.id}</p>
                <h4 className="mb-1">{task.title}</h4>
                <p className="text-muted mb-1">{task.description}</p>

                <div className="text-muted">
                    <Row>
                        <Col sm={6} lg={4}>
                            <div className="d-flex align-items-start mt-3">
                                <div className="me-2 align-self-center">
                                    <i className="ri-hashtag h2 m-0 text-muted"></i>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="mb-1">Task ID</p>
                                    <h5 className="mt-0 text-truncate">{task.id}</h5>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div className="d-flex align-items-start mt-3">
                                <div className="me-2 align-self-center">
                                    <img
                                        src={task.assignee_avatar}
                                        alt={task.assigned_to}
                                        className="rounded-circle avatar-sm"
                                    />
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="mb-1">Assign to</p>
                                    <h5 className="mt-0 text-truncate">{task.assigned_to}</h5>
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} lg={4}>
                            <div className="d-flex align-items-start mt-3">
                                <div className="me-2 align-self-center">
                                    <i className="ri-calendar-event-line h2 m-0 text-muted"></i>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="mb-1">Due Date</p>
                                    <h5 className="mt-0 text-truncate">{task.due_date}</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="mt-4">
                    <div>
                        <h5>Overview:</h5>
                        <p className="text-muted">
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer. Some quick example text to build on the card title and
                            make up the bulk of the card's content. Some quick example text to build on the card title
                            and make up.
                        </p>

                        <div className="mt-3">
                            <h5>Tags :</h5>
                            <div>
                                <Link to="#" className="badge badge-soft-primary p-1 m-1">
                                    Photoshop
                                </Link>
                                <Link to="#" className="badge badge-soft-primary p-1 m-1">
                                    Html
                                </Link>
                                <Link to="#" className="badge badge-soft-primary p-1 m-1">
                                    Css
                                </Link>
                                <Link to="#" className="badge badge-soft-primary p-1 m-1">
                                    Bootstrap
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h5>Checklists/Sub-tasks</h5>

                        {(task.checklists! || []).map((checklist, index) => (
                            <div className="form-check mt-1" key={index}>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={`checklist-${checklist.id}`}
                                    defaultChecked={checklist.completed}
                                />
                                <label
                                    className={classNames('form-check-label', {
                                        strikethrough: checklist.completed,
                                    })}
                                    htmlFor={`checklist-${checklist.id}`}
                                >
                                    {checklist.title}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Task;
