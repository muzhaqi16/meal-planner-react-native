import AsyncStorage from '@react-native-community/async-storage';
import { constants } from '../config/constants';

export const handleLogin = (user_name, password) => {
    return fetch(`${constants.API_ENDPOINT}/auth/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${constants.API_KEY}`
        },
        body: JSON.stringify({ user_name, password })
    }).then(res => {
        if (!res.ok) {
            return res.json().then(error => Promise.reject(error))
        }
        return res.json()
    })
}
export const storeData = async (name, value) => {
    try {
        await AsyncStorage.setItem(`@${name}`, value)
    } catch (e) {
        return e
    }
}
export const getData = async (name) => {
    try {
        const value = await AsyncStorage.getItem(`@${name}`)
        if (value !== null) {
            return value;
        }
    } catch (e) {
        return e;
    }
}