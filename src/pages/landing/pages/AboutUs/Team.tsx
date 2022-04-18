import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// types
import { TeamMember } from './data';

interface TeamProps {
    teamMembers: TeamMember[];
}

const Team = ({ teamMembers }: TeamProps) => {
    return (
        <section className="section">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <div className="title text-center mb-4">
                            <i className="pe-7s-users h1 text-primary mb-3"></i>
                            <h3 className="font-22 mb-3">Meet Our Expert</h3>
                            <p className="text-muted">
                                If several languages coalesce the grammar of the resulting language
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {teamMembers &&
                        teamMembers.length > 0 &&
                        (teamMembers || []).map((member, index) => {
                            return (
                                <Col key={index} lg={3} sm={6}>
                                    <div className="team-box mt-4">
                                        <div className="team-box-img">
                                            <img src={member.avatar} alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                        <div className="team-overlay">
                                            <div className="team-content text-center">
                                                <div className="team-name">
                                                    <h4 className="mb-1">
                                                        <Link to="#" className="text-white">
                                                            {member.name}
                                                        </Link>
                                                    </h4>
                                                    <p className="text-white">{member.title}</p>
                                                </div>
                                                <div className="social-icon">
                                                    <Link to="#" className="m-1">
                                                        <i className="mdi mdi-facebook"></i>
                                                    </Link>
                                                    <Link to="#" className="m-1">
                                                        <i className="mdi mdi-twitter"></i>
                                                    </Link>
                                                    <Link to="#" className="m-1">
                                                        <i className="mdi mdi-instagram"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </section>
    );
};

export default Team;
