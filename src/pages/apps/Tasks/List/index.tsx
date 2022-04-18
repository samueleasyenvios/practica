import React, { useState } from 'react';
import { Row, Col, Dropdown, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import PageTitle from '../../../../components/PageTitle';

import TaskSection from './Section';

// dummy data
import { todayTasks, upcomingTasks, otherTasks, TaskItemTypes } from './data';

// Task List
const TaskList = () => {
    const [todayTask] = useState<TaskItemTypes[]>([...todayTasks]);
    const [upcomingTask] = useState<TaskItemTypes[]>([...upcomingTasks]);
    const [otherTask] = useState<TaskItemTypes[]>([...otherTasks]);

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Tasks', path: '/apps/tasks/list' },
                    { label: 'Tasks List', path: '/apps/tasks/list', active: true },
                ]}
                title={'Tasks List'}
            />
            <Row>
                <Col lg={12}>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    {/* cta */}
                                    <Row>
                                        <Col sm={3}>
                                            <Link to="#" className="btn btn-primary waves-effect waves-light">
                                                <i className="fe-plus me-1"></i>Add New
                                            </Link>
                                        </Col>
                                        <Col sm={9}>
                                            <div className="float-sm-end mt-3 mt-sm-0">
                                                <div className="d-flex align-items-start flex-wrap">
                                                    <div className="mb-3 mb-sm-0 me-sm-2">
                                                        <form>
                                                            <div className="position-relative">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Search..."
                                                                />
                                                            </div>
                                                        </form>
                                                    </div>

                                                    <Dropdown align="end">
                                                        <Dropdown.Toggle variant="light">
                                                            <i className="mdi mdi-filter-variant"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>Due Date</Dropdown.Item>
                                                            <Dropdown.Item>Added Date</Dropdown.Item>
                                                            <Dropdown.Item>Assignee</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="custom-accordion">
                                        <div className="mt-4">
                                            <TaskSection title="Today" tasks={todayTask} />
                                        </div>

                                        <div className="mt-4">
                                            <TaskSection title="Upcoming" tasks={upcomingTask}></TaskSection>
                                        </div>

                                        <div className="mt-4">
                                            <TaskSection title="Other" tasks={otherTask} />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default TaskList;
