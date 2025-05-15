import { StyleSheet } from "react-native";
import { Theme } from "../../../../resources/themes";
import { normalizeFont } from "../../../../services/utils/fontSize";

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column', 
    },
    imageContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        height:  `${normalizeFont(30)}%`,
        marginTop: `${normalizeFont(30)}%`,
        marginBottom: "10%"
    },
    image : {
        height: "100%"
    },
    welcomeText : {
        textAlign: "left",
        color: Theme.SECONDARY_FONT_COLOR,
        fontSize: 40,
        fontWeight: 800,
        paddingBottom : 20
    },
    descriptionText : {
        textAlign: "left",
        color: Theme.TERTIARY_FONT_COLOR,
        fontSize: 16,
        fontWeight: 400,
        paddingBottom : 30
    },
    btnContainer : {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 30,
    }  
})