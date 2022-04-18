import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// dummy data
import { Post } from '../data';

interface PostsProps {
    posts: Post[];
}

const Posts = ({ posts }: PostsProps) => {
    return (
        <Row>
            {(posts || []).map((post, index) => {
                return (
                    <Col key={index} lg={6}>
                        <Card className="overflow-hidden mb-4">
                            <div className="blog-img">
                                <img src={post.image} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                            <div className="blog-content p-3 mx-3">
                                <h4 className="mt-0">
                                    <Link to="/landing-blog-detail" className="text-dark">
                                        {post.title}
                                    </Link>
                                </h4>
                                <p className="text-muted mb-0">{post.desc}</p>
                            </div>
                            <div className="blog-meta px-4 pb-3">
                                <p className="float-end text-muted pt-1 mb-0">{post.posted_on}</p>
                                <div className="float-start me-2">
                                    <img src={post.author_avatar} alt="" className="rounded-circle avatar-sm" />
                                </div>
                                <h5 className="font-14 mt-0 pt-2">{post.author}</h5>
                            </div>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
};

export default Posts;
