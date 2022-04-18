import React from 'react';
import { Link } from 'react-router-dom';

// types
import { Post } from '../data';

interface PopularPostsProps {
    posts: Post[];
}

const PopularPosts = ({ posts }: PopularPostsProps) => {
    return (
        <div className="widget widget-popular-post card mb-4">
            <div className="p-4">
                <h4 className="widget-title mt-0">Popular Posts</h4>
                <hr />

                <div>
                    {(posts.filter((x) => x.isPopular) || []).map((post, index) => {
                        return (
                            <div key={index} className="popular-post d-flex align-items-start">
                                <img src={post.image} className="img-fluid rounded me-3" alt="" />
                                <div className="">
                                    <h5 className="mt-0 font-14">
                                        <Link to="#" className="text-dark">
                                            {post.title}
                                        </Link>
                                    </h5>
                                    <span className="text-muted">{post.posted_on}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PopularPosts;
