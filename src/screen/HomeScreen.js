import React from 'react'
import { Text, View, Button } from 'react-native'

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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