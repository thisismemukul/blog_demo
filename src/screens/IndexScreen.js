import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';

const IndexScreen = () => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);
    return (
        <View style={styles.container}>
            <Button title="Add Post" onPress={() => addBlogPost('NewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNew Post')} />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.listItem}>
                            <View style={styles.listItemView}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Ionicons style={styles.icon} name="trash-bin" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    )
                }
                }
            />
        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 50
    },
    listItem: {
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10
    },
    listItemView: {
        flex: 11,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },

    text: {
        fontSize: 18
    },
    icon: {
        flex: 1,
    }

});