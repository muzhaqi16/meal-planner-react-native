import colors from './colors'
import { Platform } from 'react-native';

export const AppStyles = {
    colors,
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 150,
        width: "80%"
    },
    fontSize: {
        title: 30,
        content: 20,
        normal: 18
    },
    fontHeight: {
        title: 38,
        content: 28,
        normal: 24
    },
    containerWidth: {
        full: "100%",
        small: "90%",
        smaller: "80%",
        half: "50%"
    },
    buttonWidth: {
        main: "70%"
    },
    textInputWidth: {
        main: "80%"
    },
    fontName: {
        main: "Noto Sans",
        bold: "Noto Sans"
    },
    borderRadius: {
        main: 25,
        small: 5
    },
    logo: {
        flex: 1,
        width: "70%",
        resizeMode: "contain",
        alignSelf: "center"
    },
    errorText: {
        height: 30,
        paddingBottom: 10,
        alignSelf: "center",
        color: colors.torch_red,
        ...Platform.select({
            android: {
                paddingLeft: 6
            }
        })
    }
};