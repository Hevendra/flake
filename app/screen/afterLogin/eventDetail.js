import React from 'react'
import { StyleSheet, View, SectionList, Text, TouchableOpacity, Image } from 'react-native';
import { Styles, Colors, Spacing, Typography } from '../../theme'
import HeaderView from '../../components/shared/headerView'
import AppButton from '../../components/shared/appButton'
import { CONFIRM, CANCEL, TYPE_PRIMARY, TYPE_SECONDARY, NEXT_EVENT } from '../../constant'

const EventDetail = () => {

    const onConfirm = () => {
        console.log("Confirm Clicked")
    }

    const onCancel = () => {
        console.log("Cancel Clicked")
    }

    
    return (
        <View style={styles.container}>
            <HeaderView
                title={'Event'}
                logo={{ uri:'https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg'}}
                buttonIcon={require('../../../assets/layer_4_copy.png')}
            />
            <View style={styles.detailContainer}>
                <Text style={styles.headerTitle}>{NEXT_EVENT}</Text>
                <View style={styles.eventDetailContainer}>
                    <View style={styles.horizontalContainer}>
                        <Image  
                            style={styles.buttonIcon} 
                            resizeMode={'contain'} 
                            source={require('../../../assets/date-event.png')} 
                        />
                        <View style={styles.verticalContainer}>
                            <Text style={styles.txtDetailHeading}>Feb 24</Text>
                            <Text style={styles.txtDesc}>In 2 days</Text>
                        </View>
                    </View>
                    <View style={styles.horizontalContainer}>
                        <View style={styles.verticalContainer}>
                            <Text style={styles.txtDetailHeading}>Drinks with Jennifer</Text>
                            <Text style={styles.txtDesc}>No one has voted yet</Text>
                        </View>
                        <Image  
                            style={styles.profileImage} 
                            resizeMode={'contain'} 
                            source={{ uri:'https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg'}} 
                        />
                    </View>
                </View>

                <View style={styles.timeContainer}>
                    <Image  
                        style={styles.clockIcon} 
                        resizeMode={'contain'} 
                        source={require('../../../assets/time.png')} 
                    />
                    <Text style={styles.titleHeading}>6 PM</Text>
                </View>
                <View style={styles.timeContainer}>
                    <View>
                        <Text style={styles.titleHeading}>Do you want to</Text>
                        <View style={styles.buttonContainer}>
                            <AppButton
                                type={TYPE_PRIMARY}
                                title={CONFIRM}
                                clickHandler={onConfirm} 
                            />
                            <AppButton
                                type={TYPE_SECONDARY}
                                title={CANCEL}
                                clickHandler={onCancel} 
                            />
                        </View>
                    </View>
                </View>
                <Text style={styles.txtDetailHeading}>contact us</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
    },
    detailContainer: {
        display: "flex",
        flexDirection: "column",
        height: '100vh', 
        padding: Spacing.CONTAINER_PADDING,
        backgroundColor: Colors.COLOR_WHITE,
        width: '100vw'
    },
    eventDetailContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',  
        marginTop: Spacing.PADDING_M,  
    },
    horizontalContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center'    
    },
    verticalContainer: {
        display: "flex",
        flexDirection: "column",
        marginHorizontal: Spacing.PADDING_M      
    },
    timeContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10vh',    
    },
    headerTitle: {
        ...Styles.titleLabel,
        color: Colors.COLOR_BORDER_LINE,
        borderBottomColor: Colors.COLOR_BORDER_LINE,
        borderBottomWidth: Spacing.SIZE_BORDER_LINE,
        marginBottom: Spacing.PADDING_M,
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },
    profileImage: {
        width: 50, 
        height: 50, 
        borderRadius: 50, 
        justifyContent: 'center', 
        alignItems: 'center'
      },
    buttonIcon: {
        width: 40, 
        height: 40, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    clockIcon: {
        width: 25, 
        height: 25, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    txtDetailHeading: {
        ...Styles.textDetail,
        color: Colors.COLOR_BLACK,
        fontWeight: Typography.FONT_WEIGHT_BOLD
    },
    titleHeading: {
        ...Styles.titleHeading,
        color: Colors.COLOR_BLACK,
        padding: Spacing.PADDING_S,
        textAlign:'center'
    },
    txtDetails: {
        ...Styles.textDetail,
        color: Colors.COLOR_BLACK,
    },
    txtDesc: {
        ...Styles.textDetailSmall,
        color: Colors.COLOR_BLACK,
    },

})

export default EventDetail