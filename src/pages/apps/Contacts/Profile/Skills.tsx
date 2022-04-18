import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { SkillTypes } from './data';

interface SkillsProps {
    skills: SkillTypes[];
}

const Skills = ({ skills }: SkillsProps) => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Skills</h4>
                <p className="sub-header mb-3">Everyone realizes why a new common language would be desirable</p>

                {(skills || []).map((skill, index) => {
                    return (
                        <div key={index} className={classNames('pt-1', { 'mt-2': index !== 0 })}>
                            <h6 className={classNames('text-uppercase', { 'mt-0': index === 0 })}>
                                {skill.language} <span className="float-end">{skill.progress}%</span>
                            </h6>
                            <ProgressBar now={skill.progress} variant="purple" className="progress-sm m-0" />
                        </div>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

export default Skills;
