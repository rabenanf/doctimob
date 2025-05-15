import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'column',
        paddingHorizontal : 30,
        gap : 30
    },
    title : {
        fontSize: 32,
        fontWeight: 700,
        textAlign: 'center'
    },
    description : {
        fontSize: 16,
        fontWeight: 400,
        textAlign: 'center'
    }
})