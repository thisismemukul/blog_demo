import React from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';
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
        case 'GET_BLOG_POSTS':
            return action.payload;
        default:
            return state;
    }
}

const getBlogPosts = (dispatch) => {
    return async() => {
        const response = await jsonServer.get('/blogposts');
        dispatch({ type: 'GET_BLOG_POSTS', payload: response.data });
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


export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, []);