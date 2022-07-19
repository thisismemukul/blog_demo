import { View, Text, StyleSheet,TextInput,Button } from 'react-native'
import React, { useState, useContext } from 'react'
import { Context } from '../context/BlogContext'

const EditScreen = ({ route }) => {
    const { id } = route.params;
    const { state } = useContext(Context);
    const blogPost = state.find(blogPost => blogPost.id === id);
    const [title, setTitle] = useState(blogPost.title);
    const [description, setDescription] = useState(blogPost.description);
    console.log(id);
    return (
        <View style={styles.container}>
            <Text>Create Blog</Text>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.input} value={description} onChangeText={(text) => setDescription(text)} />
            <Button title="Edit Post" onPress={() => {
                addBlogPost(title, description, () => {
                    setTitle('');
                    setDescription('');
                    navigation.navigate('IndexScreen');
                });
            }} />
        </View>
    )
}

export default EditScreen

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