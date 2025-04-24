import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addContainer : {
        flexDirection : 'column',
        alignItems: "center",
        rowGap: 30,
        borderRadius: 30,
        backgroundColor : "white",
        justifyContent: 'center',
        padding: 20,
        width : '95%'
    },
    keyboardContainer : {
        flexDirection : 'column',
        alignItems: "center",
        rowGap: 30,
        justifyContent: 'center',
        width : '100%'
    },
    rectangle : {
        width: 100,
        height: 5,
        backgroundColor: "rgba(229, 231, 243, 1)",
        borderRadius: 10
    },
    titleContainer : {
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 10,
        width: '100%'
    },
    title : {
        fontSize: 20,
        fontWeight: 700
    },
    description : {
        fontSize: 14,
        fontWeight: 400
    },
    form : {
        flexDirection: "column",
        alignItems: "flex-start",
        width: '100%',
        rowGap: 10
    },
    input: {
        fontSize: 16,
        color: '#333',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        width: '100%'
    },
    action : {
        flexDirection : "column",
        width : "100%"
    }
})