import React from 'react';
import createDataContext from './createDataContext';
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOG_POST':
            return [...state, { title: `Blog Post #${state.length + 1}`, description: action.payload }];
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return (content) => {
        dispatch({ type: 'ADD_BLOG_POST', payload: content });
    }
}


export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, []);