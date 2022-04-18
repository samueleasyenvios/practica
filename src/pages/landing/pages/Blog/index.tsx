import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// components
import Header from '../../Header';
import Footer from '../../Footer';

import PageTitle from '../PageTitle';
import BlogRightSideBar from '../BlogRightSideBar';

import Posts from './Posts';
import Pagination from './Pagination';

// dummy data
import { posts } from '../data';

const Blog = () => {
    return (
        <div className="landing">
            {/* header */}
            <Header />

            <PageTitle title="Blog" breadcrumbItem="Blog" />

            <section className="section">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <Posts posts={posts} />

                            {/* pagination */}
                            <Pagination />
                        </Col>
                        <Col lg={4}>
                            <BlogRightSideBar posts={posts} />
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
