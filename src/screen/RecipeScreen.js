import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableHighlight, Image, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { metrics } from '../config'

export default class RecipeScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTransparent: true,
            headerLeft: (
                <TouchableHighlight onPress={() => console.log("Hello")}>
                    <Icon.Button
                        style={{ marginTop: 50 }}
                        name="chevron-left"
                        backgroundColor="transparent" />
                </TouchableHighlight>
            ),
            headerRight: (
                <Icon.Button onPress={() => console.log("Hello")} style={{ marginTop: 50 }} name="bookmark" backgroundColor="transparent" />
            ),
        };
    };
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar translucent
                    backgroundColor="rgba(0, 0, 0, 0)"
                    barStyle="light-content"
                    animated />
                <View>
                    <Image style={styles.backgroundImage} source={{ uri: 'https://source.unsplash.com/user/mggbox' }} />
                </View>
                <ScrollView style={styles.recipeContainer}>
                    <Text style={{ fontSize: 24 }}>Breakfast High Protein Berry Smooth Salad Time!</Text>
                    <Text>15 min 650 calories per serving</Text>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    recipeContainer: {
        flex: 1,
        borderRadius: 40,
        minHeight: metrics.DEVICE_HEIGHT / 2,
        zIndex: 2,
        width: metrics.DEVICE_WIDTH,
        paddingTop: 10,
        position: "absolute",
        paddingHorizontal: 30, paddingTop: 20,
        top: -50,
        backgroundColor: "white",
        marginTop: metrics.DEVICE_HEIGHT / 2
    }
    ,
    backgroundImage: {
        ...StyleSheet.absoluteFill,
        width: metrics.DEVICE_WIDTH,
        height: metrics.DEVICE_HEIGHT / 2,
        resizeMode: 'cover',
        zIndex: 1
    }
})