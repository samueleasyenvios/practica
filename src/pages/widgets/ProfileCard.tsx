import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

interface ProfileCardProps {
    avatar: string;
    name: string;
    email: string;
    role: string;
    variant: string;
}

const ProfileCard = ({ avatar, name, email, role, variant }: ProfileCardProps) => {
    return (
        <Card className="widget-rounded-circle">
            <Card.Body>
                <Row className="align-items-center">
                    <Col className="col-auto">
                        <div className="avatar-lg">
                            <img src={avatar} className="img-fluid rounded-circle" alt="" />
                        </div>
                    </Col>

                    <Col>
                        <h5 className="mt-0 mb-1">{name}</h5>
                        <p className="text-muted mb-2 font-13 text-truncate">{email}</p>
                        <small className={'text-' + variant}>
                            <b>{role}</b>
                        </small>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard;
