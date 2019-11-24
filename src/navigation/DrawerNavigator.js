import { createDrawerNavigator } from 'react-navigation-drawer';
import ProfileScreen from '../screen/ProfileScreen';
import TabNavigator from './TabNavigator';

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: TabNavigator,
    },
    Profile: {
        screen: ProfileScreen,
    },
})
export default DrawerNavigator;