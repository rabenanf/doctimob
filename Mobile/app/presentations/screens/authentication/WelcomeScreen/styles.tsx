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
        paddingHorizontal: 30,
        paddingVertical: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 160,
    },
    welcomeText : {
        textAlign: "center",
        color: Theme.SECONDARY_FONT_COLOR,
        fontSize: 40,
        fontWeight: 800,
        paddingBottom : 20,
        fontFamily : 'Rubik'
    },
    descriptionText : {
        textAlign: "center",
        color: Theme.TERTIARY_FONT_COLOR,
        fontSize: 16,
        fontWeight: 400,
    },
    btnContainer : {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 30,
    }

})