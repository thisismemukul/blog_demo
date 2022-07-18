import React, { createContext, useState } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);
    const addBlogPost = (content) => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}`, description: content }])
    }
    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>;
}

export default BlogContext;