import React from 'react';

// components
import Search from './Search';
import Categories from './Categories';
import PopularPosts from './PopularPosts';
import Archives from './Archives';
import Tags from './Tags';

// types
import { Post } from '../data';

interface BlogRightSideBarProps {
    posts: Post[];
}

const BlogRightSideBar = ({ posts }: BlogRightSideBarProps) => {
    return (
        <div className="blog-right-sidebar">
            <Search />

            <Categories />

            <PopularPosts posts={posts} />

            <Archives />

            <Tags />
        </div>
    );
};

export default BlogRightSideBar;
