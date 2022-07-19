import React from 'react';
import createDataContext from './createDataContext';
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOG_POST':
            return [...state, { id: Math.floor(Math.random() * 99999), title: action.payload.title, description: action.payload.description }];
        case 'DELETE_BLOG_POST':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'EDIT_BLOG_POST':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            });
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return (title, description, callBack) => {
        dispatch({ type: 'ADD_BLOG_POST', payload: { title, description } });
        if (callBack) {
            callBack();
        }
    }
}
const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'DELETE_BLOG_POST', payload: id });
    }
}
const editBlogPost = (dispatch) => {
    return (id, title, description, callBack) => {
        dispatch({ type: 'EDIT_BLOG_POST', payload: { id, title, description } });
        if (callBack) {
            callBack();
        }
    }
}


export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost }, [{ id: 1, title: 'JSX for beginners (and how it differs from HTML)', description: 'So JSX permits us write Javascript and HTML together. However, unlike HTML and Javascript, JSX cannot be interpreted by browsers so it needs a compiler (Babel or Webpack) to transpile it to Javascript.' }]);