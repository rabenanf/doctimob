import { StyleSheet } from "react-native";
import {Theme} from '../../../../resources/themes';
import {normalizeFont} from '../../../../services/utils/fontSize';

export const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        //paddingBottom : 80,
    },
    imageContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        height:  `${normalizeFont(25)}%`,
        marginTop: `${normalizeFont(20)}%`,
        marginBottom: "10%"
    },
    image : {
        height: "100%",
        resizeMode: "contain",
        maxHeight: normalizeFont(223),
    },
    textContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
        paddingHorizontal : 30
    },
    welcomeText : {
        textAlign: "center",
        color: Theme.SECONDARY_FONT_COLOR,
        fontSize: normalizeFont(40),
        fontWeight: 800,
        paddingBottom : 20,
    },
    descriptionText : {
        textAlign: "center",
        color: Theme.TERTIARY_FONT_COLOR,
        fontSize: 16,
        fontWeight: 400
    },
    typeContainer : {
        paddingHorizontal : 30,
        rowGap : normalizeFont(23)
    },
    btnContainer : {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 30,
    },
    typeSelected : {
        alignItems: "flex-start",
        rowGap: normalizeFont(10),
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 3,
        borderColor: Theme.PRIMARY_COLOR,
        borderRadius: 20
    },
    type : {
        alignItems: "flex-start",
        rowGap: normalizeFont(10),
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 3,
        borderColor: "rgba(229, 231, 243, 1)",
        borderRadius: 20
    },
    item : {
        color: "rgba(21, 44, 42, 1)",
        fontSize: 14,
        fontWeight: 700
    },
    itemDesc : {
        color: "rgba(102, 108, 146, 1)",
        fontFamily: "Rubik",
        fontSize: 12,
    } 
})