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
        rowGap : 30,
        paddingHorizontal: 30,
        height : '90%',
    },
    paymentFooter : {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 30,
    },
    imageContainer : {
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        borderRadius: 200,
        width : 140,
        height : 140,
        backgroundColor : Theme.PRIMARY_COLOR
    },
    price : {
        fontSize: 32,
        fontWeight: 700
    },
    priceText : {
        fontSize: 16,
        fontWeight: 400
    },
    selectedMehodText : {
        fontSize: 16,
        fontWeight: 400
    },
    cashText : {
        fontSize: 16,
        fontWeight: 700 
    },
    description : {
        fontSize: 14,
        fontWeight: 400,
        textAlign: 'center'
    }
})
