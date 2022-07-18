import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const IndexScreen = () => {
    return (
       <View style={styles.container}>
            <Text>IndexScreen</Text>
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