import { StyleSheet } from "react-native";
import {Theme} from '../../../../resources/themes'

export const styles = StyleSheet.create({
    homevideContainer : {
        flex: 1,
        flexDirection: 'column', 
        alignItems: 'center',
    },
    imageFrame : {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical : 30
    },
    welcomeContainer : {
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome : {
        textAlign: "center",
        color: Theme.SECONDARY_FONT_COLOR,
        fontSize: 40,
        fontWeight: 800,
    },
    name : {
        textAlign: "center",
        color: Theme.PRIMARY_COLOR,
        fontSize: 40,
        fontWeight: 800,
        paddingBottom : 20
    },
    description : {
        textAlign: "center",
        color: Theme.TERTIARY_FONT_COLOR,
        fontSize: 16,
        fontWeight: 400
    },
    createaNewRequest : {
        paddingVertical : 30
    },
    create : {
        textAlign: 'center',
        color: Theme.TERTIARY_FONT_COLOR,
        fontSize: 16,
        fontWeight: 700,
    },
    request : {
        textAlign: 'center',
        color: Theme.PRIMARY_COLOR,
        fontSize: 16,
        fontWeight: 700,
    },
    imageArrow : {
        justifyContent: 'center',
        alignItems: 'center',
    }
});