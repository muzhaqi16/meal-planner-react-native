import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

export default class LogoutScreen extends Component {
    constructor(props) {
        super(props);
        this.signOut();
    }
    static navigationOptions = {
        drawerLabel: 'Log Out',
        drawerIcon: ({ tintColor }) => (
            <Icon
                name="ios-exit"
                size={25}
                color={tintColor}
            />
        ),
    };
    signOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }
    render() {
        return (
            <View>
                <Text> Logout </Text>
            </View>
        )
    }
}
