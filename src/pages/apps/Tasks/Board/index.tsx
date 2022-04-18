import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Dropdown } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';

import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

// components
import PageTitle from '../../../../components/PageTitle';

import TaskItem from './Task';
import AddNewTask from './AddNewTask';

// dummy data
import { tasks, TaskTypes } from './data';

// images
import defaultAvatar from '../../../../assets/images/users/avatar-1.jpg';

interface StateType {
    upcomingTasks: TaskTypes[];
    inprogressTasks: TaskTypes[];
    completedTasks: TaskTypes[];
}

// kanban
const Kanban = () => {
    const [state, setState] = useState<StateType>({
        upcomingTasks: tasks.filter((t) => t.status === 'Upcoming'),
        inprogressTasks: tasks.filter((t) => t.status === 'Inprogress'),
        completedTasks: tasks.filter((t) => t.status === 'Completed'),
    });
    const [totalTasks, setTotalTasks] = useState<number>(tasks.length);
    const [newTaskModal, setNewTaskModal] = useState<boolean>(false);
    const [newTaskDetails, setNewTaskDetails] = useState<any>(null);

    /**
     * Creates new empty task with given status
     * @param status
     * @param queue
     */
    const newTask = (status: string, queue: string) => {
        setNewTaskDetails({
            dueDate: new Date(),
            userAvatar: [defaultAvatar],
            status: status,
            queue: queue,
        });
        setNewTaskModal(true);
    };

    // a little function to help us with reordering the result
    const reorder = (list: any[], startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    /**
     * Moves an item from one list to another list.
     */
    const move = (
        source: Iterable<unknown> | ArrayLike<unknown>,
        destination: Iterable<unknown> | ArrayLike<unknown>,
        droppableSource: { index: number; droppableId: string | number },
        droppableDestination: { index: number; droppableId: string | number }
    ) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);
        destClone.splice(droppableDestination.index, 0, removed);
        const result: any = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    };

    /**
     * Gets the list
     */
    const getList = (id: string) => {
        const modifiedState: any = { ...state };
        const stateTasks: any = modifiedState[id] && modifiedState[id];
        return stateTasks;
    };

    /**
     * On drag end
     */
    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        if (source.droppableId === destination.droppableId) {
            const items = reorder(getList(source.droppableId), source.index, destination.index);
            let localState: any = { ...state };
            localState[source.droppableId] = items;
            setState(localState);
        } else {
            const result = move(getList(source.droppableId), getList(destination.droppableId), source, destination);
            const localState = { ...state, ...result };
            setState(localState);
        }
    };
    /*
     * Form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            title: yup.string().required(),
            priority: yup.string().required(),
            description: yup.string().required(),
        })
    );

    /*
     * Form methods
     */
    const methods = useForm({ resolver: schemaResolver });
    const { reset } = methods;

    /**
     * Toggles the new task modal
     */
    const toggleNewTaskModal = () => {
        setNewTaskModal((prevstate) => !prevstate);
    };

    /**
     * When date changes
     * @param {} date
     */
    const handleDateChange = (date: Date) => {
        if (newTaskDetails) {
            setNewTaskDetails({ ...newTaskDetails, dueDate: date });
        }
    };

    /**
     * Handles the new task form submission
     */
    const handleNewTask = (values: any) => {
        const formData = {
            title: values['title'],
            priority: values['priority'],
            description: values['description'],
        };

        const newTask = {
            ...newTaskDetails,
            ...formData,
            id: totalTasks + 1,
            dueDate: newTaskDetails.dueDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            }),
        };

        let modifiedState: any = { ...state };
        let tasks = [...getList(newTaskDetails.queue), newTask];
        modifiedState[newTaskDetails.queue] = [...tasks];

        setState(modifiedState);
        setNewTaskModal(false);
        setTotalTasks(totalTasks + 1);

        // reset the form after submission
        reset();
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Tasks', path: 'apps/tasks/kanban' },
                    { label: 'Kanban Board', path: 'apps/tasks/kanban', active: true },
                ]}
                title={'Kanban Board'}
            />
            <Row>
                <DragDropContext onDragEnd={onDragEnd}>
                    {/* todo */}
                    <Droppable droppableId="upcomingTasks">
                        {(provided, snapshot) => (
                            <Col lg={4} ref={provided.innerRef}>
                                <Card>
                                    <Card.Body>
                                        <Dropdown className="float-end" align="end">
                                            <Dropdown.Toggle as="a" className="cursor-pointer">
                                                <i className="mdi mdi-dots-vertical m-0 text-muted h3"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>Edit</Dropdown.Item>
                                                <Dropdown.Item>Delete</Dropdown.Item>
                                                <Dropdown.Item>Add Members</Dropdown.Item>
                                                <Dropdown.Item>Add Due Date</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <h5 className="header-title">Upcoming</h5>
                                        <p className="sub-header">
                                            Your awesome text goes here. Your awesome text goes here.
                                        </p>
                                        {state.upcomingTasks.length === 0 && (
                                            <p className="text-center text-muted pt-2 mb-0">No Tasks</p>
                                        )}

                                        <ul className="sortable-list tasklist list-unstyled" id="upcoming">
                                            {(state.upcomingTasks || []).map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id + ''} index={index}>
                                                    {(provided, snapshot) => (
                                                        <li
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={classNames('task-' + item.priority)}
                                                        >
                                                            <TaskItem task={item} />
                                                        </li>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </ul>
                                        <div className="d-grid">
                                            <Link
                                                to="#"
                                                className="btn btn-primary mt-3 waves-effect waves-light"
                                                onClick={() => newTask('Pending', 'upcomingTasks')}
                                            >
                                                <i className="mdi mdi-plus-circle"></i> Add New
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Droppable>

                    {/* in progress */}
                    <Droppable droppableId="inprogressTasks">
                        {(provided, snapshot) => (
                            <Col lg={4} ref={provided.innerRef}>
                                <Card>
                                    <Card.Body>
                                        <Dropdown className="float-end" align="end">
                                            <Dropdown.Toggle as="a" className="cursor-pointer">
                                                <i className="mdi mdi-dots-vertical m-0 text-muted h3"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>Edit</Dropdown.Item>
                                                <Dropdown.Item>Delete</Dropdown.Item>
                                                <Dropdown.Item>Add Members</Dropdown.Item>
                                                <Dropdown.Item>Add Due Date</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <h5 className="header-title">In Progress</h5>
                                        <p className="sub-header">Your awesome text goes here.</p>

                                        {state.inprogressTasks.length === 0 && (
                                            <p className="text-center text-muted pt-2 mb-0">No Tasks</p>
                                        )}

                                        <ul className="sortable-list tasklist list-unstyled" id="inprogress">
                                            {(state.inprogressTasks || []).map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id + ''} index={index}>
                                                    {(provided, snapshot) => (
                                                        <li
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={classNames('task-' + item.priority)}
                                                        >
                                                            <TaskItem task={item} />
                                                        </li>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </ul>
                                        <div className="d-grid">
                                            <Link
                                                to="#"
                                                className="btn btn-primary mt-3 waves-effect waves-light"
                                                onClick={() => newTask('Inprogress', 'inprogressTasks')}
                                            >
                                                <i className="mdi mdi-plus-circle"></i> Add New
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Droppable>

                    {/* done */}
                    <Droppable droppableId="completedTasks">
                        {(provided, snapshot) => (
                            <Col lg={4} ref={provided.innerRef}>
                                <Card>
                                    <Card.Body>
                                        <Dropdown className="float-end" align="end">
                                            <Dropdown.Toggle as="a" className="cursor-pointer">
                                                <i className="mdi mdi-dots-vertical m-0 text-muted h3"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>Edit</Dropdown.Item>
                                                <Dropdown.Item>Delete</Dropdown.Item>
                                                <Dropdown.Item>Add Members</Dropdown.Item>
                                                <Dropdown.Item>Add Due Date</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <h5 className="header-title">Completed</h5>
                                        <p className="sub-header">
                                            Your awesome text goes here. Your awesome text goes here.
                                        </p>
                                        {state.completedTasks.length === 0 && (
                                            <p className="text-center text-muted pt-2 mb-0">No Tasks</p>
                                        )}

                                        <ul className="sortable-list tasklist list-unstyled" id="done">
                                            {(state.completedTasks || []).map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id + ''} index={index}>
                                                    {(provided, snapshot) => (
                                                        <li
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={classNames('task-' + item.priority)}
                                                        >
                                                            <TaskItem task={item} />
                                                        </li>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </ul>

                                        <div className="d-grid">
                                            <Link
                                                to="#"
                                                className="btn btn-primary mt-3 waves-effect waves-light"
                                                onClick={() => newTask('Done', 'completedTasks')}
                                            >
                                                <i className="mdi mdi-plus-circle"></i> Add New
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Droppable>
                    {/* </div> */}
                </DragDropContext>
            </Row>

            {/* add new task modal */}
            {newTaskDetails && (
                <AddNewTask
                    methods={methods}
                    newTaskDetails={newTaskDetails}
                    newTaskModal={newTaskModal}
                    toggleNewTaskModal={toggleNewTaskModal}
                    handleNewTask={handleNewTask}
                    handleDateChange={handleDateChange}
                />
            )}
        </>
    );
};

export default Kanban;
