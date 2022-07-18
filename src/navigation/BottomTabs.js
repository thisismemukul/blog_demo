import { StyleSheet, Animated, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Topics, Repos, Gist } from '../screens';
import { LIGHT_COLORS, SIZES } from '../constants/theme';

import { Ionicons } from '@expo/vector-icons';


const tabs = [
  {
    name: 'Home',
    screen: Home,
  },
  {
    name: 'Topics',
    screen: Topics,
  },
  {
    name: 'Repos',
    screen: Repos,
  },
  {
    name: 'Gist',
    screen: Gist,
  },
];


const BottomTabs = () => {
  const BottomTabs = createBottomTabNavigator();
  const offsetAnimation = React.useRef(new Animated.Value(0)).current;

  return (
    <>
      <BottomTabs.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarShowLabel: false,
          backgroundColor: LIGHT_COLORS.background,
          tabBarStyle: {
            height: 70,
            borderTopWidth: 0,
            paddingBottom: 28,
            borderTopColor: "transparent",
            borderRadius: 16,
            alignContent: 'center',
          },
          tabBarActiveTintColor: LIGHT_COLORS.icons,
        }}>
        {tabs.map(({ name, screen }, index) => {
          return (
            <BottomTabs.Screen
              key={name}
              name={name}
              component={screen}
              options={({ route }) => ({
                tabBarIcon: ({ focused, size }) => {
                  let iconName;
                  let rn = route.name;
                  if (rn === "Home") {
                    iconName = focused ? 'logo-github' : 'logo-github';
                  } else if (rn === "Topics") {
                    iconName = focused ? 'bulb' : 'bulb-outline';
                  } else if (rn === "Repos") {
                    iconName = focused ? 'albums' : 'albums-outline';
                  } else if (rn == "Gist") {
                    iconName = focused ? 'code-slash' : 'code-slash-outline';
                  }
                  return <Ionicons name={iconName} size={size} color={focused ? LIGHT_COLORS.icons : LIGHT_COLORS.gray} />;
                },
              })}
              listeners={{
                focus: () => {
                  Animated.spring(offsetAnimation, {
                    toValue: index * (SIZES.width / tabs.length),
                    useNativeDriver: true,
                  }).start();
                },
              }}
            />
          );
        })}
      </BottomTabs.Navigator>
      <Animated.View
        style={[
          styles.indicator,
          {
            transform: [
              {
                translateX: offsetAnimation,
              },
            ],
          },
        ]}
      />
    </>
  )
}

export default BottomTabs;

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    width: 10,
    height: 2,
    left: SIZES.width / tabs.length / 2 - 5,
    bottom: 30,
    backgroundColor: LIGHT_COLORS.icons,
    zIndex: 100,
  },
});