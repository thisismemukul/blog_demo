import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeStack from './src/navigation/HomeStack';
const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </>
  )
}

export default App;
