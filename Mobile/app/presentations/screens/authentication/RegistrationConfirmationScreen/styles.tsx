import { StyleSheet } from "react-native";
import { Theme } from "../../../../resources/themes";

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column', 
    },
    imageContainer : {
        paddingTop : 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image : {
        width: 150,
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