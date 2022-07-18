import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'
const IndexScreen = () => {
    const { data, addBlogPost } = useContext(BlogContext);
    return (
        <View style={styles.container}>
            <Text>IndexScreen</Text>
            <Button title="Add Post" onPress={() => addBlogPost('New Post')} />
            <FlatList
                data={data}
                keyExtractor={(data) => data.title.toString()}
                renderItem={({ item }) => {
                    return <Text style={styles.text}>{item.title} - {item.description}</Text>
                }
                }
            />

            {/* {blogPosts.map(blogPost => {
                return <Text key={blogPost.id}>{blogPost.title}</Text>
            })} */}
        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 50
    },
});