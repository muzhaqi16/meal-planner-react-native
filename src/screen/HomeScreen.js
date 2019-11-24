import React from 'react'
import { Text, View, Button, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
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
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#FFFFFF"
                />
                <Text> Home Screen </Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Open Drawer"
                    onPress={() => this.props.navigation.openDrawer()}
                />
            </View>
        )
    }
}
export default HomeScreen;