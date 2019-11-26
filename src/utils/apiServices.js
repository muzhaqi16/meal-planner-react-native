import { constants } from '../config';

const handleLogin = (user_name, password) => {
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
const register = (user) => {
    return fetch(`${constants.API_ENDPOINT}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${constants.API_KEY}`
        },
        body: JSON.stringify(user)
    }).then(res => {
        if (!res.ok) {
            return res.json().then(error => Promise.reject(error))
        }
        return res.json()
    })
}
export { handleLogin, register };