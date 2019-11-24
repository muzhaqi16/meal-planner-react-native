import { Platform } from "react-native";

export const constants = {
    IS_ENV_DEVELOPMENT: __DEV__,
    IS_ANDROID: Platform.OS === "android",
    IS_IOS: Platform.OS === "ios",
    IS_DEBUG_MODE_ENABLED: Boolean(window.navigator.userAgent),
    API_ENDPOINT: 'https://sleepy-reaches-47839.herokuapp.com/api',
    API_KEY: '910237e9-95fd-4ecf-b17b-4af6605a1f01',
    RECIPE_API_KEY: 'a7381a617b0e4aa4aa37db1ba8b5a414',
    TOKEN_KEY: 'sous-chef-client-auth-token',
};

export const logoImage = require("../img/logo.png");
