import React from 'react';
import { Table } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { ProjectDetailTypes } from './data';

interface AboutProps {
    projectDetails: ProjectDetailTypes[];
}

const About = ({ projectDetails }: AboutProps) => {
    return (
        <>
            <h5 className="mb-4 text-uppercase">Experience</h5>

            {/* timeline */}
            <ul className="list-unstyled timeline-sm">
                <li className="timeline-sm-item">
                    <span className="timeline-sm-date">2015 - 19</span>
                    <h5 className="mt-0 mb-1">Lead designer / Developer</h5>
                    <p>websitename.com</p>
                    <p className="text-muted mt-2">
                        Everyone realizes why a new common language would be desirable: one could refuse to pay
                        expensive translators. To achieve this, it would be necessary to have uniform grammar,
                        pronunciation and more common words.
                    </p>
                </li>
                <li className="timeline-sm-item">
                    <span className="timeline-sm-date">2012 - 15</span>
                    <h5 className="mt-0 mb-1">Senior Graphic Designer</h5>
                    <p>Software Inc.</p>
                    <p className="text-muted mt-2">
                        If several languages coalesce, the grammar of the resulting language is more simple and regular
                        than that of the individual languages. The new common language will be more simple and regular
                        than the existing European languages.
                    </p>
                </li>
                <li className="timeline-sm-item">
                    <span className="timeline-sm-date">2010 - 12</span>
                    <h5 className="mt-0 mb-1">Graphic Designer</h5>
                    <p>Coderthemes LLP</p>
                    <p className="text-muted mt-2 mb-0">
                        The European languages are members of the same family. Their separate existence is a myth. For
                        science music sport etc, Europe uses the same vocabulary. The languages only differ in their
                        grammar their pronunciation.
                    </p>
                </li>
            </ul>

            <h5 className="mb-3 mt-5 text-uppercase">Projects</h5>

            <Table borderless responsive className="table-nowrap mb-0">
                <thead className="table-light">
                    <tr>
                        <th>#</th>
                        <th>Project Name</th>
                        <th>Start Date</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Clients</th>
                    </tr>
                </thead>
                <tbody>
                    {(projectDetails || []).map((project, index) => {
                        return (
                            <tr key={index}>
                                <td>{project.id}</td>
                                <td>{project.name}</td>
                                <td>{project.startDate}</td>
                                <td>{project.dueDate}</td>
                                <td>
                                    <span
                                        className={classNames('badge', {
                                            'bg-info': project.status === 'Work in Progress',
                                            'bg-success': project.status === 'Pending',
                                            'bg-pink': project.status === 'Done',
                                            'bg-danger': project.status === 'On Hold',
                                            'bg-warning': project.status === 'Coming soon',
                                        })}
                                    >
                                        {project.status}
                                    </span>
                                </td>
                                <td>{project.client}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default About;
