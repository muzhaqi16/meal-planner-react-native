import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class SettingScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Settings',
            headerLeft: () => (
                <View style={{ marginLeft: 25 }}>
                    <Icon
                        onPress={navigation.openDrawer}
                        name="ios-menu"
                        size={35} />
                </View>

            ),
        }
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> Setting Screen </Text>
            </View>
        )
    }
}
