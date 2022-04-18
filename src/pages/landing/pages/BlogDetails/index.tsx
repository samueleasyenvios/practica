import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// components
import Header from '../../Header';
import Footer from '../../Footer';

import PageTitle from '../PageTitle';
import BlogRightSideBar from '../BlogRightSideBar';

import Details from './Details';
import Comments from './Comments';
import Contact from './Contact';

// dummy data
import { posts } from '../data';

const BlogDetails = () => {
    return (
        <div className="landing">
            {/* header */}
            <Header />

            <PageTitle title="Beautiful Day With Friends In Paris" breadcrumbItem="Blog Details" />

            <section className="section">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="blog-details-box">
                                <Details />

                                <Comments />

                                <Contact />
                            </div>
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

export default BlogDetails;
