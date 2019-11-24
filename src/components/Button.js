import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";

import { AppStyles } from '../styles/AppStyles'

class Button extends React.Component {
    render() {
        const { disabled, label, onPress } = this.props;
        // If the button is disabled we lower its opacity
        const containerStyle = [
            styles.container,
            disabled
                ? styles.containerDisabled
                : styles.containerEnabled
        ];
        return (
            <TouchableOpacity
                style={containerStyle}
                onPress={onPress}
                disabled={disabled}
            >
                <Text style={styles.text}>{label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppStyles.colors.dodger_blue,
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(255,255,255,0.7)"
    },
    containerEnabled: {
        opacity: 1
    },
    containerDisabled: {
        opacity: 0.5
    },
    text: {
        color: AppStyles.colors.white,
        textAlign: "center",
        height: AppStyles.fontHeight.normal,
        fontSize: AppStyles.fontSize.normal,
    }
});

export default Button;
