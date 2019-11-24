import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screen/LoginScreen';
import SignupScreen from '../screen/SignupScreen';
import ForgotPasswordScreen from '../screen/ForgotPasswordScreen';

const AuthStack = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
        },
        Signup: {
            screen: SignupScreen
        },
        Reset: {
            screen: ForgotPasswordScreen
        }
    },
    {
        initialRouteName: 'Login'
    }
);
export default AuthStack;