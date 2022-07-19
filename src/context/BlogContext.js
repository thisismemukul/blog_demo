import React from 'react';
import createDataContext from './createDataContext';
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOG_POST':
            return [...state, { id: Math.floor(Math.random() * 99999), title: action.payload.title, description: action.payload.description }];
        case 'DELETE_BLOG_POST':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return (title, description, callBack) => {
        dispatch({ type: 'ADD_BLOG_POST', payload: { title, description } });
        callBack();
    }
}
const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'DELETE_BLOG_POST', payload: id });
    }
}


export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, [{ id: 1, title: 'JSX for beginners (and how it differs from HTML)', description: 'So JSX permits us write Javascript and HTML together. However, unlike HTML and Javascript, JSX cannot be interpreted by browsers so it needs a compiler (Babel or Webpack) to transpile it to Javascript.' }]);