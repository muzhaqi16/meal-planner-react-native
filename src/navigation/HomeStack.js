import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screen/HomeScreen';
import RecipeScreen from '../screen/RecipeScreen';

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: RecipeScreen,
        params: { name: 'Food' },//you can provide default parameters
        // navigationOptions: ({ navigation }) => ({
        //     title: `${navigation.state.params.name}'s Details`
        // })
    }
},
    {
        initialRouteName: 'Home',
        headerMode: "float"
    }
);
export default HomeStack;
