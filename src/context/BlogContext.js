import React, { createContext, useState, useReducer } from 'react';

const BlogContext = createContext();
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOG_POST':
            return [...state, { title: `Blog Post #${state.length + 1}`, description: action.payload }];
        default:
            return state;
    }
}

export const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(blogReducer, []);
    const addBlogPost = (content) => {
        dispatch({ type: 'ADD_BLOG_POST', payload: content });
    }
    return <BlogContext.Provider value={{ data: state, addBlogPost }}>{children}</BlogContext.Provider>;
}

export default BlogContext;