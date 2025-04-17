import { StyleSheet } from "react-native";
import {Theme} from '../../../../resources/themes'

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
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
        paddingBottom: 30,
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
        paddingEnd: 30
    },
    form : {
        justifyContent: 'flex-start',
    },
    login : {
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        gap: 15
    },
    txtHaveAccount : {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 400
    },
    txtLogin : {
        textAlign: 'center',
        color: Theme.PRIMARY_COLOR,
        fontSize: 16,
        fontWeight: 700,
    },
    btnContainer : {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 30,
    }  
})