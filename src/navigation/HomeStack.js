import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import BottomTabs from './BottomTabs';
import IndexScreen from '../screens/IndexScreen';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen
                name="BottomTabs"
                component={BottomTabs}
                options={{
                    headerShown: false
                }}
            /> */}
            <Stack.Screen name="IndexScreen" component={IndexScreen}
                options={{
                    presentation: 'modal',
                    headerShown: false
                }} />
            {/* <Stack.Screen name="Code" component={Code}
                options={{
                    presentation: 'modal',
                }} /> */}
        </Stack.Navigator>
    )
}

export default HomeStack