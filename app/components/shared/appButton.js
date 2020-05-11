import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Styles, Colors } from '../../theme'
import { TYPE_PRIMARY } from '../../constant'

const AppButton = (props) => {
    const { type, title, clickHandler } = props
    const { primaryButton,  secondaryButton } = styles
    const styleObj = type==TYPE_PRIMARY ? primaryButton : secondaryButton
    return (
        <TouchableOpacity
            style={styleObj}
            onPress={clickHandler}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: Colors.COLOR_PRIMARY,
        ...Styles.button,
    },
    secondaryButton: {
        backgroundColor: Colors.COLOR_SECONDARY,
        ...Styles.button,
    },
    btnText: {
        ...Styles.buttonTxt
    }

})

export default AppButton