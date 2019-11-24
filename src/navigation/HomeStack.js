import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screen/HomeScreen';
import DetailsScreen from '../screen/DetailsScreen';

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen,
        params: { name: 'Artan' },//you can provide default parameters
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name}'s Details`
        })
    }
},
    {
        initialRouteName: 'Home',
    }
);
export default HomeStack;
