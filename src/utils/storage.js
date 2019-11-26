import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (name, value) => {
    try {
        await AsyncStorage.setItem(`@${name}`, value)
    } catch (e) {
        return e
    }
}
const getData = async (name) => {
    try {
        const value = await AsyncStorage.getItem(`@${name}`)
        if (value !== null) {
            return value;
        }
    } catch (e) {
        return e;
    }
}
export { storeData, getData };