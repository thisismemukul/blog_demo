import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
const ShowScreen = ({ route }) => {
    const { id } = route.params;
    const { state } = useContext(Context);
    const blogPost = state.find(blogPost => blogPost.id === id);
    return (
        <View style={styles.listItem}>
        <View style={styles.listItemView}>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.description}>{blogPost.description}</Text>
        </View>
    </View>
    )
}

export default ShowScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 50
    },
    listItem: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 10,
        elevation: 1.4,
        marginVertical: 10
    },
    listItemView: {
        flex: 11,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#888',
    },
    icon: {
        flex: 1,
    }

});