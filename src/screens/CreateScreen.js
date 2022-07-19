import { StyleSheet } from 'react-native';
import React, { useState, useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';
const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);
    return (
        <BlogPostForm onSubmit={(title, description) => {
            addBlogPost(title, description, () => {
                navigation.navigate('IndexScreen');
            });
        }} />
    );
}

export default CreateScreen;
const styles = StyleSheet.create({
});

