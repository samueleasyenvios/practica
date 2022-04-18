import React from 'react';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';

interface ContactInfoProps {
    name: string;
    value: string;
    icon: string;
}

const ContactInfo = ({ name, value, icon }: ContactInfoProps) => {
    return (
        <Card>
            <Card.Body className="text-center">
                <div className="mb-3">
                    <i className={classNames(icon, 'h2', 'text-primary')}></i>
                    {/* <i className="pe-7s-global h2 text-primary"></i> */}
                </div>
                <h4>{name}</h4>
                <p className="text-muted mb-0">{value}</p>
            </Card.Body>
        </Card>
    );
};

export default ContactInfo;
