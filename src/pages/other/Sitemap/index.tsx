import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import classNames from 'classnames';

// components
import PageTitle from '../../../components/PageTitle';

// dummy data
import { sitemap1, sitemap2, sitemap3, ItemType } from './data';

// images
import logo from '../../../assets/images/logo-sm-dark.png';

const SiteMenuTitle = ({ label }: { label: ItemType['label'] }) => {
    return (
        <Link to="#" className="text-uppercase fw-bold">
            <img src={logo} alt="" height="12" className="me-1" /> {label}
        </Link>
    );
};

const SiteMapMenu = ({ item }: { item: ItemType }) => {
    return (
        <ul>
            {(item.children || []).map((item, index) => (
                <SiteMapMenuItem key={index} item={item} />
            ))}
        </ul>
    );
};

const SiteMapMenuItem = ({ item }: { item: ItemType }) => {
    const { children, level } = item;
    const hasChildren = item && children && children.length;

    return (
        <li>
            <Link to="#" className={classNames(item.className)}>
                {item.icon && <i className={classNames(item.icon, 'me-1')}></i>}
                {level === 1 ? <b>{item.label}</b> : item.label}
            </Link>
            {hasChildren && <SiteMapMenu item={item} />}
        </li>
    );
};

const Sitemap = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Extra Pages', path: '/pages/sitemap' },
                    { label: 'Sitemap', path: '/pages/sitemap', active: true },
                ]}
                title={'Sitemap'}
            />
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col lg={4}>
                                    <ul className="sitemap">
                                        <li>
                                            <SiteMenuTitle label={sitemap1['label']} />
                                            <SiteMapMenu item={sitemap1} />
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg={4}>
                                    <ul className="sitemap">
                                        <li>
                                            <SiteMenuTitle label={sitemap2['label']} />
                                            <SiteMapMenu item={sitemap2} />
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg={4}>
                                    <ul className="sitemap">
                                        <li>
                                            <SiteMenuTitle label={sitemap3['label']} />
                                            <SiteMapMenu item={sitemap3} />
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Sitemap;
