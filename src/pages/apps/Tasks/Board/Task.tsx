import React from 'react';
import { Link } from 'react-router-dom';

// dummy data
import { TaskTypes } from './data';

interface TaskItemProps {
    task: TaskTypes;
}

// task item
const TaskItem = (props: TaskItemProps) => {
    const task = props.task || {};

    return (
        <>
            <div className="form-check mb-2 float-end">
                <input className="form-check-input ms-0" type="checkbox" value="" />
            </div>
            <h5 className="mt-0">
                <Link to="#" className="text-dark">
                    {task.title}
                </Link>
            </h5>

            <p>{task.description}</p>

            <div className="clearfix"></div>

            <div className="row">
                <div className="col-auto">
                    <div>
                        {(task.userAvatar || []).map((avatar, index) => {
                            return (
                                <Link key={index} to="#" className="me-1">
                                    <img src={avatar} alt="" className="avatar-sm img-thumbnail rounded-circle" />
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="col">
                    <div className="text-end">
                        <p className="font-13 mt-2 mb-0">
                            <i className="mdi mdi-calendar"></i> {task.dueDate}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TaskItem;
