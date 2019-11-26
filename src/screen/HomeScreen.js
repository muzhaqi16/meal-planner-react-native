import React from 'react'
import { Text, View, Button, StatusBar, Image, TouchableHighlight, StyleSheet, ScrollView, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { AppStyles } from '../styles/AppStyles';
import { MealCard } from '../styles/MealCard';
import { metrics } from '../config';

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    renderCategories = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
            <View style={MealCard.container}>
                <Image style={MealCard.photo} source={{ uri: 'https://source.unsplash.com/user/brookelark' }} />
                <Text style={MealCard.title}>{item.title}</Text>
            </View>
        </TouchableHighlight>
    );
    render() {
        const categories = [{
            categoryId: 1,
            title: "Calories",
            measureUnit: "Kcal",
            amount: "75%",
            color: "green",
            icon: "apple"
        }, {
            categoryId: 2,
            title: "Fats",
            measureUnit: "Fats",
            amount: "25%",
            color: "red",
            icon: "hamburger"
        }, {
            categoryId: 3,
            title: "Carbs",
            measureUnit: "Kcal",
            amount: "75%",
            color: "green",
            icon: "pasta"
        }, {
            categoryId: 4,
            title: "Protein",
            measureUnit: "Kcal",
            amount: "75%",
            color: "green",
            icon: "muscle"
        }]
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#FFFFFF"
                />
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.h1}>Dashboard</Text>
                        <Text style={styles.p}>Welcome back, <Text style={styles.link}>Artan</Text></Text>
                    </View>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://source.unsplash.com/user/iamthibault' }}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ alignSelf: "stretch", marginBottom: 20, marginTop: 10 }}>
                        <View style={styles.headerContainer}>
                            <Text style={{ fontSize: AppStyles.sizes.title }}>Todays Meals</Text>
                            <Text style={styles.link}>Track Food ></Text>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe()}>
                                <View style={MealCard.container}>
                                    <Image style={MealCard.photo} source={{ uri: 'https://source.unsplash.com/user/mggbox' }} />
                                    <Text style={MealCard.title}>Breakfast</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe()}>
                                <View style={MealCard.container}>
                                    <Image style={MealCard.photo} source={{ uri: 'https://source.unsplash.com/user/brookelark' }} />
                                    <Text style={MealCard.title}>Lunch</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe()}>
                                <View style={MealCard.container}>
                                    <Image style={MealCard.photo} source={{ uri: 'https://source.unsplash.com/user/brookelark' }} />
                                    <Text style={MealCard.title}>Dinner</Text>
                                </View>
                            </TouchableHighlight>
                        </ScrollView>
                    </View>
                    <View style={{ alignSelf: "stretch", flex: 1, minHeight: 500 }}>
                        <View style={styles.headerContainer}>
                            <Text style={{ fontSize: AppStyles.sizes.title }}>Progress Last Weeks</Text>
                            <Text style={styles.link}>Current ></Text>
                        </View>
                        <FlatList
                            vertical
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            data={categories}
                            renderItem={this.renderCategories}
                            keyExtractor={item => `${item.categoryId}`}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    link: {
        color: AppStyles.colors.blue,
        fontSize: AppStyles.sizes.body
    },
    headerContainer: {
        alignSelf: "stretch",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10
    },
    h1: {
        fontSize: AppStyles.sizes.h1,
        color: AppStyles.colors.title
    },
    p: {
        fontSize: AppStyles.sizes.body,
        color: AppStyles.colors.text
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: 'cover'
    }
});
export default HomeScreen;

console.disableYellowBox = true;