import React from "react";
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import { AppStyles } from '../styles/AppStyles'

class FormTextInput extends React.Component {
    textInputRef = React.createRef();

    state = {
        isFocused: false
    };

    focus = () => {
        if (this.textInputRef.current) {
            this.textInputRef.current.focus();
        }
    };

    handleFocus = (e) => {
        this.setState({ isFocused: true });
        // Remember to propagate the `onFocus` event to the
        // parent as well (if set)
        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    };

    handleBlur = (e) => {
        this.setState({ isFocused: false });
        // Remember to propagate the `onBlur` event to the
        // parent as well (if set)
        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    };

    render() {
        // On Android we want to change the color of the input
        // underline when it is focused. To do so this component
        // must be aware of being focused, so we'll use the
        // TextInput `onFocus` and `onBlur` callbacks to set
        // a variable in the state that keeps track of when the
        // TextInput is focused.
        // We should also make sure to remove the `onFocus` and
        // `onBlur` props from the `...otherProps`, otherwise
        // they would override our own handlers.
        const {
            error,
            onFocus,
            onBlur,
            style,
            ...otherProps
        } = this.props;
        const { isFocused } = this.state;
        return (
            <View style={[styles.container, style]}>
                <TextInput
                    ref={this.textInputRef}
                    selectionColor={AppStyles.colors.dodger_blue}
                    underlineColorAndroid={
                        isFocused
                            ? AppStyles.colors.dodger_blue
                            : AppStyles.colors.light_gray
                    }
                    style={styles.textInput}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    {...otherProps}
                />
                <Text style={styles.errorText}>{error || ""}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    textInput: {
        fontSize: AppStyles.fontSize.normal,
        height: 40,
        ...Platform.select({
            ios: {
                borderColor: AppStyles.colors.silver,
                borderBottomWidth: StyleSheet.hairlineWidth
            },
            // The underline on Android is slightly misaligned so
            // we fix it by adding a left padding here...
            android: {
                paddingLeft: 6
            }
        })
    },
    errorText: {
        height: 20,
        color: AppStyles.colors.torch_red,
        // ...and here as well
        ...Platform.select({
            android: {
                paddingLeft: 6
            }
        })
    }
});

export default FormTextInput;
