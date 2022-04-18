import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

interface PageTitleProps {
    title: string;
    breadcrumbItem: string;
}

const PageTitle = ({ title, breadcrumbItem }: PageTitleProps) => {
    return (
        <section className="page-header-box bg-primary">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="text-center">
                            <h3 className="page-header-title text-white text-uppercase mb-0">{title}</h3>
                            <Breadcrumb listProps={{ className: 'mb-0' }}>
                                <Breadcrumb.Item href="#">Minton</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
                                <Breadcrumb.Item href="#" active>
                                    {breadcrumbItem}
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PageTitle;
