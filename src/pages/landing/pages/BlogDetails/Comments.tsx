import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

// images
import img1 from '../../../../assets/images/landing/users/img-1.png';
import img2 from '../../../../assets/images/landing/users/img-2.png';
import img3 from '../../../../assets/images/landing/users/img-3.png';

const Comments = () => {
    return (
        <Card className="mb-4">
            <Card.Body className="p-4">
                <h5 className="font-18 mt-0 mb-4 font-weight-bold">Comments (5)</h5>

                <ul className="media-list mb-0 p-0">
                    <li className="d-flex align-items-start">
                        <Link to="#">
                            <img className="media-object avatar-md rounded-circle" src={img1} alt="" />
                        </Link>

                        <div className="ms-3">
                            <Link to="#" className="float-end text-primary">
                                <i className="mdi mdi-reply"></i> Reply
                            </Link>
                            <h5 className="mt-0 font-16 mb-0">Michelle Duran</h5>
                            <p className="text-muted font-size-13 mb-3">05 May, 2019, 11:45 am</p>
                            <p className="text-muted">
                                It will be as simple as Occidental; in fact, it will be occidental. To an English
                                person, it will seem like simplified english, as a skeptical Cambridge friend of mine
                                told me what occidental.
                            </p>
                        </div>
                    </li>

                    <li className="d-flex align-items-start mt-3">
                        <Link to="#">
                            <img className="media-object avatar-md rounded-circle" src={img2} alt="" />
                        </Link>

                        <div className="ms-3">
                            <Link to="#" className="float-end text-primary">
                                <i className="mdi mdi-reply"></i> Reply
                            </Link>
                            <h5 className="mt-0 font-16 mb-0">Ronda Otoole</h5>
                            <p className="text-muted font-size-13 mb-3">06 May, 2019, 11:52 am</p>
                            <p className="text-muted mb-4">
                                Nulla venenatis in pede mi aliquet sit amet euismod i, auctor ut ligula aliquam dapibus
                                tincidunt metus praesent justo dolor lobortis quis lobortis dignissim pulvinar ac.
                            </p>

                            <div className="d-flex align-items-start sub_media mt-2">
                                <Link to="#">
                                    <img className="media-object avatar-md rounded-circle" src={img3} alt="" />
                                </Link>
                                <div className="ms-3">
                                    <Link to="#" className="float-end text-primary">
                                        <i className="mdi mdi-reply"></i> Reply
                                    </Link>
                                    <h5 className="mt-0 font-16 mb-0">James Whitley</h5>
                                    <p className="text-muted font-size-13 mb-3">06 May, 2019, 12:24 pm</p>
                                    <p className="text-muted">
                                        Everyone realizes why a new common language would be desirable: one could refuse
                                        to pay expensive translators.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="d-flex align-items-start mt-3">
                        <Link to="#">
                            <img className="media-object avatar-md rounded-circle" src={img1} alt="" />
                        </Link>
                        <div className="ms-3">
                            <Link to="#" className="float-end text-primary">
                                <i className="mdi mdi-reply"></i> Reply
                            </Link>
                            <h5 className="mt-0 font-16 mb-0">Kimberly Chretien</h5>
                            <p className="text-muted font-size-13 mb-3">07 May, 2019, 11:45 am</p>
                            <p className="text-muted">
                                If several languages coalesce, the grammar of the resulting language is more simple and
                                regular than that of the individual languages the new common language
                            </p>
                        </div>
                    </li>
                </ul>
            </Card.Body>
        </Card>
    );
};

export default Comments;
