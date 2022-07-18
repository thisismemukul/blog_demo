import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStack from './src/navigation/RootStack';
import { Provider } from './src/context/BlogContext';
const App = () => {
  return (
    <Provider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App;
