import { StyleSheet } from "react-native";
import {Theme} from '../../../../resources/themes'

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column', 
        alignItems: 'center',
    },
    imageContainer : {
        alignItems: 'center',
        height: 220,
        paddingTop: 20,
        paddingBottom: 20
    },
    image : {
        height: 180
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
        color: Theme.TERTIARY_FONT_COLOR,
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
    },
    birthday : {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    inputStyle : {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#fff',
        marginVertical: 6,
        borderColor: '#ddd',
        width: '30%'
    }    
})