import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
const ShowScreen = ({ route }) => {
    const { id } = route.params;
    const { state } = useContext(Context);
    const blogPost = state.find(blogPost => blogPost.id === id);
    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

export default ShowScreen

const styles = StyleSheet.create({})