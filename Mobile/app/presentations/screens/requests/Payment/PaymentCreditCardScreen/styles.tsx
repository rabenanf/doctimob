import { StyleSheet } from "react-native";
import { Theme } from "../../../../../resources/themes"

export const styles = StyleSheet.create({
    paymentContainer : {
        flex : 1
    },
    paymentTitle : {
        alignItems : "center",
        justifyContent : "center",
        flexDirection : "column",
        rowGap : 16,
        paddingHorizontal: 30
    },
    paymentFooter : {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 30,
    },
    price : {
        fontSize: 32,
        fontWeight: 500
    },
    priceText : {
        fontSize: 16,
        fontWeight: 400
    },
    title : {
        fontSize: 32,
        fontWeight: 700,
        textAlign: "center"  
    },
    description : {
        fontSize: 14,
        color: "rgba(102, 108, 146, 1)",
        fontWeight: 400,
        textAlign: "center"
    },
    card : {
        paddingTop : 30,
        paddingHorizontal : 30,
    }
})