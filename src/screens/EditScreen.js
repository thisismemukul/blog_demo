import { StyleSheet, } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const { state, editBlogPost } = useContext(Context);
    const blogPost = state.find(blogPost => blogPost.id === id);
    return (
        <BlogPostForm initialValues={{ title: blogPost.title, description: blogPost.description }}
            onSubmit={(title, description) => {
                editBlogPost(id, title, description, () => navigation.pop());
            }
            } />
    )
}

export default EditScreen;