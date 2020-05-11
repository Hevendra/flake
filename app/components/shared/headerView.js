import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import { Styles, Colors, Spacing } from '../../theme'

const HeaderView = (props) => {
    const { logo, title, buttonIcon, clickHandler } = props
    return (
        <View style={styles.container}>
            { logo && 
                <Image  
                    style={styles.profileImage} 
                    resizeMode={'contain'} 
                    source={logo} 
                />
            }
            <Text style={styles.titleText}>{title}</Text>
            <Image  
                style={styles.buttonIcon} 
                resizeMode={'contain'} 
                source={buttonIcon} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        backgroundColor: Colors.COLOR_HEADER_BACKGROUND,
        padding: Spacing.PADDING_S,
        alignContent: 'center',
        height: 55,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        width: 40, 
        height: 40, 
        borderRadius: 50, 
        justifyContent: 'center', 
        alignItems: 'center'
      },
    buttonIcon: {
        width: 30, 
        height: 30, 
        justifyContent: 'center', 
        alignItems: 'center'
    },  
    titleText: {
        ...Styles.titleHeading,
        color: Colors.COLOR_PRIMARY
    },
})

export default HeaderView