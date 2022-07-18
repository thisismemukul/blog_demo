import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeStack from './src/navigation/HomeStack';
import {BlogProvider} from './src/context/BlogContext';
const App = () => {
  return (
    <BlogProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </BlogProvider>
  )
}

export default App;
