import { StyleSheet } from "react-native";
import {Theme} from '../../../../resources/themes'

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    imageContainer : {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image : {
        width: 150,
    },
    textContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30
    },
    welcomeText : {
        textAlign: "center",
        color: Theme.SECONDARY_FONT_COLOR,
        fontSize: 40,
        fontWeight: 800,
        paddingBottom : 20
    },
    descriptionText : {
        textAlign: "center",
        color: Theme.TERTIARY_FONT_COLOR,
        fontSize: 16,
        fontWeight: 400
    },
    formContainer : {
        paddingHorizontal: 30,
        flexDirection: 'column', 
    },
    forgotStyle : {
        textAlign: "right",
        color: Theme.PRIMARY_COLOR,
        fontSize: 16,
        fontWeight: 700,
    },
    remeberStyle : {
        paddingLeft : 3,
        color: '#999',
        fontSize: 16,
    },
    form : {
        flex:1,
        justifyContent: 'flex-start'
    },
    footer : {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    btnContainer : {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 30,
    } 
})