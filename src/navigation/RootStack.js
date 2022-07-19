import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Feather,EvilIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import BottomTabs from './BottomTabs';
import IndexScreen from '../screens/IndexScreen';
import ShowScreen from '../screens/ShowScreen';
import CreateScreen from '../screens/CreateScreen';
import EditScreen from '../screens/EditScreen';
const Stack = createNativeStackNavigator();
const RootStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="IndexScreen" component={IndexScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    presentation: 'modal',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
                            <Feather name="plus" size={30} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen name="ShowScreen" component={ShowScreen}
                options={({ route,navigation }) => ({
                    headerShown: true,
                    presentation: 'modal',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('EditScreen',{
                            id: route.params.id,
                        })}>
                            <EvilIcons name="pencil" size={35} />
                        </TouchableOpacity>
                    ),
                })} />
            <Stack.Screen name="CreateScreen" component={CreateScreen}
                options={{
                    presentation: 'modal',
                }} />
            <Stack.Screen name="EditScreen" component={EditScreen}
                options={{
                    presentation: 'modal',
                }} />
        </Stack.Navigator>
    )
}

export default RootStack