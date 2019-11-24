import React from "react";
import Button from "../components/Button";
import { Text, View, StyleSheet, Image, StatusBar } from "react-native";
import { AppStyles } from "../styles/AppStyles";
import { ActivityIndicator } from "react-native";
import { getData } from '../utils/index'
import { logoImage } from '../config/constants';


class WelcomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
        this.checkAuthToken();
    }

    render() {
        if (this.state.isLoading == true) {
            return (
                <ActivityIndicator
                    style={styles.spinner}
                    size="large"
                    color={AppStyles.colors.tint}
                />
            );
        }
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#FFFFFF"
                />
                <Image source={logoImage} style={AppStyles.logo} />
                <Text style={styles.title}>Say hello to your new app</Text>
                <Button
                    label="Login"
                    onPress={() => this.props.navigation.navigate("Login")}
                />
                <Button
                    label="Sign Up"
                    onPress={() => this.props.navigation.navigate("Signup")}
                />
            </View>
        );
    }

    async checkAuthToken() {
        // This will switch to the Home screen or Login screen 
        //based on the authToken being stored in the phone storage
        //and this loading screen will be unmounted and thrown away.
        getData("authToken").then(data => {
            if (data != undefined) {
                this.props.navigation.navigate('Home');
            } else {
                this.setState({ isLoading: false })
            }
        });


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 150,
        width: AppStyles.containerWidth.smaller
    },
    title: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: "bold",
        color: AppStyles.colors.tint,
        marginTop: 20,
        textAlign: "center",
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    spinner: {
        marginTop: 200
    }
});

export default WelcomeScreen;
