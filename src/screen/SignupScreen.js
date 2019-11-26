import React, { Component } from 'react';
import { Alert, ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { AppStyles } from '../styles/AppStyles'
import { Button, FormTextInput } from '../components';
import { strings, constants } from "../config";
import { register, storeData } from '../utils';

export default class SignupScreen extends Component {
    state = {
        email: null,
        username: null,
        password: null,
        emailTouched: false,
        usernameTouched: false,
        passwordTouched: false,
        errors: [],
        loading: false,
    }
    static navigationOptions = {
        header: null,
    };
    usernameInputRef = React.createRef();
    passwordInputRef = React.createRef();

    handleEmailChange = (email) => {
        this.setState({ email, error: null });
    };
    handleUsernameChange = (username) => {
        this.setState({ username, error: null });
    };

    handlePasswordChange = (password) => {
        this.setState({ password, error: null });
    };

    handleEmailSubmitPress = () => {
        if (this.usernameInputRef.current) {
            this.usernameInputRef.current.focus();
        }
    };
    handleUsernameSubmitPress = () => {
        if (this.passwordInputRef.current) {
            this.passwordInputRef.current.focus();
        }
    };

    handleEmailBlur = () => {
        this.setState({ emailTouched: true });
    };
    handleUsernameBlur = () => {
        this.setState({ usernameTouched: true });
    }
    handlePasswordBlur = () => {
        this.setState({ passwordTouched: true });
    };
    handleSignUp() {
        Keyboard.dismiss();
        const { email, username, password } = this.state;
        const user = {
            email, user_name: username, password, first_name: "Artan", last_name: "Muzhaqi"
        }

        this.setState({ loading: true });

        register(user).then(data => {
            if (!data.error) {
                storeData('authToken', data.authToken).then(
                    this.props.navigation.navigate("Home")
                )
            }
        }).catch(error => {
            this.setState({
                error: error.error,
                loading: false
            })
        }
        )
    }

    render() {
        const { navigation } = this.props;
        const { email, emailTouched, password, passwordTouched, username, usernameTouched, loading, errors } = this.state;
        const emailError =
            !email && emailTouched
                ? strings.EMAIL_REQUIRED
                : undefined;
        const usernameError = !username && usernameTouched ? strings.USERNAME_REQUIRED : undefined;
        const passwordError =
            !password && passwordTouched
                ? strings.PASSWORD_REQUIRED
                : undefined;
        return (
            <KeyboardAvoidingView style={styles.container} behavior={constants.IS_IOS ? "padding" : undefined}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#FFFFFF"
                />
                <View>
                    <Text style={{ fontSize: AppStyles.sizes.h1, textAlign: "center" }}>Sign Up</Text>
                    <View>
                        <FormTextInput
                            value={this.state.email}
                            autoCorrect={false}
                            placeholder={strings.EMAIL_PLACEHOLDER}
                            keyboardType="email-address"
                            returnKeyType="next"
                            onChangeText={this.handleEmailChange}
                            onSubmitEditing={this.handleEmailSubmitPress}
                            onBlur={this.handleEmailBlur}
                            error={emailError}
                            blurOnSubmit={constants.IS_IOS}
                            autoCapitalize='none'
                        />
                        <FormTextInput
                            ref={this.usernameInputRef}
                            value={this.state.username}
                            autoCorrect={false}
                            placeholder="Username"
                            returnKeyType="next"
                            onChangeText={this.handleUsernameChange}
                            onSubmitEditing={this.handleUsernameSubmitPress}
                            onBlur={this.handleUsernameBlur}
                            error={usernameError}
                            blurOnSubmit={constants.IS_IOS}
                            autoCapitalize='none'
                        />
                        <FormTextInput
                            ref={this.passwordInputRef}
                            value={this.state.password}
                            secureTextEntry={true}
                            placeholder="Password"
                            returnKeyType="done"
                            onChangeText={this.handlePasswordChange}
                            onBlur={this.handlePasswordBlur}
                            error={passwordError}
                            blurOnSubmit={constants.IS_IOS}
                            autoCapitalize='none'
                        />
                        {this.state.error && <Text style={AppStyles.errorText}>{this.state.error}</Text>}
                        <Button
                            label={strings.SIGNUP}
                            onPress={() => this.handleSignUp()}
                            disabled={!email || !password || !username || loading}
                        />
                        <Button
                            label={strings.BACK}
                            onPress={() => navigation.navigate('Login')}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width: AppStyles.containerWidth.small
    }
})