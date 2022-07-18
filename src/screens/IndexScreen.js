import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'
const IndexScreen = () => {
    const value = useContext(BlogContext);
    return (
        <View style={styles.container}>
            <Text>IndexScreen</Text>
            <Text>{value}</Text>
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
    },
});