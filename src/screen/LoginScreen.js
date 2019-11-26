import React from "react";
import { Image, KeyboardAvoidingView, StyleSheet, View, StatusBar, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";

import { logoImage, constants } from '../config/constants';
import strings from "../config/strings";
import { AppStyles } from "../styles/AppStyles";
import { handleLogin, storeData } from '../utils/index';

class LoginScreen extends React.Component {
    static navigationOptions = {
        // title: 'Please sign in',
        header: null,
    };

    passwordInputRef = React.createRef();

    state = {
        email: "",
        password: "",
        error: null,
        loading: false,
        emailTouched: false,
        passwordTouched: false,
    };

    handleEmailChange = (email) => {
        this.setState({ email: email, error: null });
    };

    handlePasswordChange = (password) => {
        this.setState({ password: password, error: null });
    };

    handleEmailSubmitPress = () => {
        if (this.passwordInputRef.current) {
            this.passwordInputRef.current.focus();
        }
    };

    handleEmailBlur = () => {
        this.setState({ emailTouched: true });
    };

    handlePasswordBlur = () => {
        this.setState({ passwordTouched: true });
    };
    handleLoginPress = () => {
        this.setState({ loading: true })
        handleLogin(this.state.email, this.state.password).then(data => {
            if (!data.error) {
                storeData('authToken', data.authToken).then(
                    this.props.navigation.navigate("Home")
                )

            }
        }).catch(error =>
            this.setState({
                error: error.error,
                loading: false
            })
        )
    };

    render() {
        const {
            email,
            loading,
            password,
            emailTouched,
            passwordTouched
        } = this.state;
        const emailError =
            !email && emailTouched
                ? strings.EMAIL_REQUIRED
                : undefined;
        const passwordError =
            !password && passwordTouched
                ? strings.PASSWORD_REQUIRED
                : undefined;
        return (
            <KeyboardAvoidingView
                style={styles.container}
                // On Android the keyboard behavior is handled
                // by Android itself, so we should disable it
                // by passing `undefined`.
                behavior={constants.IS_IOS ? "padding" : undefined}
            >
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#FFFFFF"
                />
                <Image source={logoImage} style={AppStyles.logo} />
                <View style={styles.form}>
                    <FormTextInput
                        value={this.state.email}
                        onChangeText={this.handleEmailChange}
                        onSubmitEditing={this.handleEmailSubmitPress}
                        placeholder={strings.EMAIL_PLACEHOLDER}
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        onBlur={this.handleEmailBlur}
                        error={emailError}
                        autoCapitalize='none'
                        // `blurOnSubmit` causes a keyboard glitch on
                        // Android when we want to manually focus the
                        // next input.
                        blurOnSubmit={constants.IS_IOS}
                    />
                    <FormTextInput
                        ref={this.passwordInputRef}
                        value={this.state.password}
                        onChangeText={this.handlePasswordChange}
                        placeholder={strings.PASSWORD_PLACEHOLDER}
                        secureTextEntry={true}
                        returnKeyType="done"
                        onBlur={this.handlePasswordBlur}
                        error={passwordError}
                        autoCapitalize='none'
                    />
                    {this.state.error && <Text style={AppStyles.errorText}>{this.state.error}</Text>}
                    <Button
                        label={strings.LOGIN}
                        onPress={this.handleLoginPress}
                        disabled={!email || !password || loading}
                    />
                    <Icon.Button name="facebook" onPress={this.loginWithFacebook} solid style={{ alignSelf: "center" }}>
                        Login with Facebook
                    </Icon.Button>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.colors.white,
        alignItems: "center",
        justifyContent: "space-around"
    },
    form: {
        flex: 1,
        justifyContent: "center",
        width: "80%"
    }
});

export default LoginScreen;
