import { StyleSheet } from 'react-native';
import Colors from './colors'
import Spacing from './spacing'
import Typography from './typography'

const Styles = {
    titleHeading: {
      fontSize: Typography.FONT_SIZE_LARGE,
      fontWeight: Typography.FONT_WEIGHT_BOLD,
    },
    titleLabel: {                    
        fontSize: Typography.FONT_SIZE_MEDIUM,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
    },
    label: {                    
        fontSize: Typography.FONT_SIZE_MEDIUM,
    },
    textDetail: {                    
        fontSize: Typography.FONT_SIZE_SMALL,
    },
    textDetailSmall: {                    
        fontSize: Typography.FONT_SIZE_SX,
    },
    button: {
        borderRadius: 5, 
        margin: Spacing.PADDING_M,
        paddingTop: Spacing.PADDING_M,
        paddingBottom: Spacing.PADDING_M,
        paddingLeft: Spacing.PADDING_XL,
        paddingRight: Spacing.PADDING_XL,
    },
    buttonTxt: {
        fontSize : Typography.FONT_SIZE_MEDIUM, 
        color : Colors.COLOR_WHITE,
    }

  }
export default Styles  