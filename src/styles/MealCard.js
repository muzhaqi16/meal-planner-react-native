import { StyleSheet, Dimensions } from 'react-native';
import { AppStyles } from './AppStyles'
// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 170;
const RECIPE_ITEM_MARGIN = 20;

// 2 photos per width
export const MealCard = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: RECIPE_ITEM_MARGIN,
        marginTop: 10,
        width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        height: RECIPE_ITEM_HEIGHT + 45,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 15,
    },
    photo: {
        width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        height: RECIPE_ITEM_HEIGHT,
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        resizeMode: 'cover'
    },
    title: {
        fontSize: AppStyles.fontSize.normal,
        textAlign: 'center',
        color: AppStyles.colors.subtitle,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
    }
});
