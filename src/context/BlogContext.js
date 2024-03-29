import React from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';
const blogReducer = (state, action) => {
    switch (action.type) {
        // case 'ADD_BLOG_POST':
        //     return [...state, { id: Math.floor(Math.random() * 99999), title: action.payload.title, description: action.payload.description }];
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
    return async(title, description, callBack) => {
        await jsonServer.post('/blogposts', { title, description });
        // dispatch({ type: 'ADD_BLOG_POST', payload: { title, description } });
        if (callBack) {
            callBack();
        }
    }
}
const deleteBlogPost = (dispatch) => {
    return async(id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'DELETE_BLOG_POST', payload: id });
    }
}
const editBlogPost = (dispatch) => {
    return async(id, title, description, callBack) => {
        await jsonServer.put(`/blogposts/${id}`, { title, description });
        dispatch({ type: 'EDIT_BLOG_POST', payload: { id, title, description } });
        if (callBack) {
            callBack();
        }
    }
}


export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, []);