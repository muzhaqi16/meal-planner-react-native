import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default class ProfileScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => (
            <Icon
                name="ios-person"
                size={25}
                color={tintColor}
            />
        ),
    };
    render() {
        return (
            <View>
                <Text>Profile Screen </Text>
            </View>
        )
    }
}
