import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Context } from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

    useEffect(() => {
        getBlogPosts();
        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });
        return () => {
            listener.remove();
        }
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ShowScreen', {
                            id: item.id,
                        })}>
                            <View style={styles.listItem}>
                                <View style={styles.listItemView}>
                                    <Text style={styles.title}>{item.title}</Text>
                                </View>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Ionicons style={styles.icon} name="trash-bin" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
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