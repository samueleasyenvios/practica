import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

// components
import PageTitle from '../../../../components/PageTitle';

import AddMember from './AddMember';

import ContactDetails from './ContactDetails';

// dummy data
import { contacts as data, ContactsItemTypes } from './data';

const List = () => {
    const [contacts, setContacts] = useState<ContactsItemTypes[]>(data);
    const [show, setShow] = useState<boolean>(false);

    /*
     * search on data
     */
    const onSearchData = (value: string) => {
        if (value === '') setContacts(data);
        else {
            var modifiedProducts = data;
            modifiedProducts = modifiedProducts.filter((item) => item.name.toLowerCase().includes(value));
            setContacts(modifiedProducts);
        }
    };

    /*
     *   modal handeling
     */
    const onCloseModal = () => setShow(false);
    const onOpenModal = () => setShow(true);

    /*
    handle form submission
    */
    const onSubmit = () => {
        onCloseModal();
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Contacts', path: '/apps/contacts/list' },
                    { label: 'Members List', path: '/apps/contacts/list', active: true },
                ]}
                title={'Members List'}
            />

            <Row className="mb-2">
                <Col sm={4}>
                    <Link to="#" className="btn btn-danger mb-2" onClick={onOpenModal}>
                        <i className="mdi mdi-plus-circle me-2"></i> Add New
                    </Link>
                </Col>
                <Col sm={8}>
                    <div>
                        <form className="d-flex align-items-start flex-wrap justify-content-sm-end">
                            <div className="d-flex align-items-start flex-wrap me-2">
                                <label htmlFor="membersearch-input" className="visually-hidden">
                                    Search
                                </label>
                                <input
                                    type="search"
                                    className="form-control"
                                    id="membersearch-input"
                                    placeholder="Search..."
                                    onChange={(e: any) => onSearchData(e.target.value)}
                                />
                            </div>
                            <Button variant="success" className="mb-2 mb-sm-0">
                                <i className="mdi mdi-cog"></i>
                            </Button>
                        </form>
                    </div>
                </Col>
            </Row>

            <ContactDetails contacts={contacts} />

            <Row className="mb-4">
                <Col sm={6}>
                    <div>
                        <h5 className="font-14 text-body">Showing Page 2 Of 12</h5>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="float-sm-end">
                        <ul className="pagination pagination-rounded mb-sm-0">
                            <li className="page-item disabled">
                                <Link className="page-link" to="#" aria-label="Previous">
                                    <i className="mdi mdi-chevron-left"></i>
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    1
                                </Link>
                            </li>
                            <li className="page-item active">
                                <Link className="page-link" to="#">
                                    2
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    3
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    4
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    5
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#" aria-label="Next">
                                    <i className="mdi mdi-chevron-right"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>

            {/* add member modal */}
            <AddMember show={show} onHide={onCloseModal} onSubmit={onSubmit} />
        </>
    );
};

export default List;
