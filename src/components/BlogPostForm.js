import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

import React, { useState } from 'react'

const BlogPostForm = ({onSubmit,initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [description, setDescription] = useState(initialValues.description);
    return (
        <View style={styles.container}>
            <Text>Create Blog</Text>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.input} value={description} onChangeText={(text) => setDescription(text)} />
            <Button title="Save Blog Post" onPress={() => onSubmit(title,description) } />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        description: ''
    }
}

export default BlogPostForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 5
    },
    button: {
        backgroundColor: '#ddd',
        padding: 10,
        margin: 5
    }

});