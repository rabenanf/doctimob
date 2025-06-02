import { StyleSheet } from "react-native";
import { Theme } from "../../../../resources/themes";
import { normalizeFont } from "../../../../services/utils/fontSize";

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column', 
        alignItems: 'center',
    },
    imageContainer : {
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
    btnContainer : {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 30,
    },
})