import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStack from './src/navigation/RootStack';
import {BlogProvider} from './src/context/BlogContext';
const App = () => {
  return (
    <BlogProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </BlogProvider>
  )
}

export default App;
