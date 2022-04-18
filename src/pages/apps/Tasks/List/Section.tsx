import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Dropdown, Table } from 'react-bootstrap';
import classNames from 'classnames';

// dummy data
import { TaskItemTypes } from './data';

const Task = ({ task }: { task: TaskItemTypes }) => {
    const [completed, setCompleted] = useState<boolean>(task.completed && task.completed);

    /*
     * mark completd on selected task
     */
    const markCompleted = (e: any) => {
        setCompleted(e.target.checked);
    };

    return (
        <>
            <tr>
                <td>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id={`task-${task.id}`}
                            checked={completed}
                            onChange={markCompleted}
                        />
                        <label className="form-check-label" htmlFor={`task-${task.id}`}>
                            {task.id}
                        </label>
                    </div>
                </td>
                <td>{task.title}</td>
                <td>
                    <div>
                        <img
                            src={task.assignee_avatar}
                            alt=""
                            className="avatar-sm img-thumbnail rounded-circle"
                            id={`task-avatar-${task.id}`}
                        />
                    </div>
                </td>
                <td>{task.due_date}</td>
                <td>
                    <span
                        className={classNames(
                            'badge',
                            {
                                'badge-soft-danger': task.priority === 'High',
                                'badge-soft-info': task.priority === 'Medium',
                                'badge-soft-success': task.priority === 'Low',
                            },
                            'p-1'
                        )}
                    >
                        {task.priority}
                    </span>
                </td>
                <td>
                    <ul className="list-inline table-action m-0">
                        <li className="list-inline-item">
                            <Link to="#" className="action-icon px-1">
                                <i className="mdi mdi-square-edit-outline"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Dropdown>
                                <Dropdown.Toggle as="a" className="cursor-pointer action-icon px-1">
                                    <i className="mdi mdi-dots-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                    <Dropdown.Item>Action</Dropdown.Item>
                                    <Dropdown.Item>Another Action</Dropdown.Item>
                                    <Dropdown.Item>Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </td>
            </tr>
        </>
    );
};

interface TaskSectionState {
    title: string;
    tasks: TaskItemTypes[];
}

const TaskSection = ({ title, tasks }: TaskSectionState) => {
    const [collapse, setCollapse] = useState<boolean>(true);
    /*
     * toggle task-dropdown
     */
    const toggleTask = () => setCollapse(!collapse);

    return (
        <>
            <h5 className="position-relative mb-0">
                <Link className="text-dark d-block" to="#" onClick={toggleTask}>
                    {title} Tasks <span className="text-muted">({('0' + tasks.length).slice(-2)})</span>
                    <i
                        className={classNames(
                            'mdi',
                            { 'mdi-chevron-down': collapse, 'mdi-chevron-right': !collapse },
                            'accordion-arrow'
                        )}
                    ></i>
                </Link>
            </h5>
            <Collapse in={collapse}>
                <div>
                    <Table responsive borderless size="sm" className="table-centered table-nowrap mt-3">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="taskupcomingCheck" />
                                        <label className="form-check-label" htmlFor="taskupcomingCheck">
                                            Task ID
                                        </label>
                                    </div>
                                </th>
                                <th scope="col">Tasks</th>
                                <th scope="col">Assign to</th>
                                <th scope="col">Due Date</th>
                                <th scope="col">Task priority</th>
                                <th scope="col" style={{ width: '85px' }}>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {(tasks || []).map((task, idx) => (
                                <Task task={task} key={idx} />
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Collapse>
        </>
    );
};

export default TaskSection;
