import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    sendMessage : {
        bottom: 10,
        top : 10,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 20
        //position: 'absolute',
    },
    paperclip : {
        height: 50,
        width: 50,
        backgroundColor: "rgba(247, 248, 255, 1)",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        borderRadius: 60
    },
    inputContainer : {
        height: 50,
        flex : 1,
        backgroundColor: "rgba(247, 248, 255, 1)",
        alignItems: "center",
        columnGap: 10,
        paddingHorizontal: 20,
        paddingVertical: 0,
        borderRadius: 20,
        flexDirection: 'row',
        shadowColor: "rgba(0, 0, 0, 0.01)",
        shadowOffset: {
            width: 0,
            height: -4
        },
        shadowOpacity: 0.8,
        shadowRadius: 20,
    },
    input : {
        flex: 1,
        fontSize: 16,
    },
    date : {
        textAlign: 'center',
        color: "rgba(102, 108, 146, 1)",
        fontSize: 10,
        fontWeight: 400,
        paddingVertical : 20
    },
    messageList: {
        rowGap: 20,
    },
    userMessage: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: "rgba(87, 207, 200, 1)",
        padding: 15,
    },
    doctorMessage: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: "rgba(204, 208, 231, 1)",
        padding: 15,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    messageText: {
        fontSize:14,
        marginBottom: 4,
        width: 'auto'
    },
    time: {
        color: "rgba(102, 108, 146, 1)",
        fontSize: 10,
        fontWeight: 400
    },  
})
