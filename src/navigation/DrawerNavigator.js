import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screen/ProfileScreen';
import TabNavigator from './TabNavigator';
import LogoutScreen from '../screen/LogoutScreen'

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: TabNavigator,
        navigationOptions: () => ({
            title: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name="ios-home"
                    size={25}
                    color={tintColor}
                />)
        }),
    },
    Profile: {
        screen: ProfileScreen,
    },
    Logout: {
        screen: LogoutScreen,
    }
}, {
    contentComponent: (props) => (
        <SafeAreaView style={styles.container}>
            <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 32 }}>LOGO</Text>
            </View>
            <ScrollView>
                <DrawerItems {...props} />
            </ScrollView>
        </SafeAreaView>
    )
})
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default DrawerNavigator;