import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeStack from './HomeStack';
import CalendarScreen from '../screen/CalendarScreen';
import SettingsScreen from '../screen/SettingsScreen'

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-home"
                    size={25}
                    color={tintColor} />
            )
        }
    },
    Calendar: {
        screen: CalendarScreen,
        navigationOptions: {
            tabBarLabel: "Calendar",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-calendar"
                    size={25}
                    color={tintColor} />
            )
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: "Settings",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-options"
                    size={25}
                    color={tintColor} />
            )
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
});

export default TabNavigator;