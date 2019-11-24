import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.
import AppDrawer from './DrawerNavigator';
import AuthStack from './AuthStack';
import WelcomeScreen from '../screen/WelcomeScreen';


const SwitchNavigator = createSwitchNavigator(
    {
        Welcome: WelcomeScreen,
        App: AppDrawer,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Welcome',
    }
)
export default SwitchNavigator;