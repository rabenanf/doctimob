import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'column',
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 10,
        paddingVertical: 30,
        paddingHorizontal: 30
    },
    title : {
        textAlign: "left",
        color: "rgba(21, 44, 42, 1)",
        fontSize: 32,
        fontWeight: 700
    },
    description : {
        textAlign: "left",
        color: "rgba(102, 108, 146, 1)",
        fontSize: 14,
        fontWeight: 400
    },
    btnContainer : {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 30,
    },
    detailContainer : {
        paddingHorizontal : 30,
    },
    containerItem : {
        flexDirection: 'row',
        justifyContent: "space-between",
        height: 60,
        borderStyle: "solid",
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 0,
        borderWidth: 1,
        borderColor: "rgba(229, 231, 243, 1)",
        borderRadius: 20
    },
    action : {
        flexDirection : "row",
        columnGap : 10
    },
    edit : {
        height: 30,
        width: 30,
        backgroundColor: "rgba(229, 231, 243, 1)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    remove : {
        height: 30,
        width: 30,
        backgroundColor: "rgba(255, 78, 0, 0.1)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    containerMember : {
        flexDirection: 'row',
        alignItems : "center",
        columnGap : 15
    },
    containerName : {
        rowGap : 10
    },
    name : {
        color: "rgba(21, 44, 42, 1)",
        fontSize: 12,
        fontWeight: 700
    },
    birthday : {
        color: "rgba(21, 44, 42, 1)",
        fontSize: 12,
        fontWeight: 400
    },
    modalBackground : {
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
    rectangle : {
        width: 100,
        height: 5,
        backgroundColor: "rgba(229, 231, 243, 1)",
        borderRadius: 10
    },
    addTitle : {
        fontSize: 20,
        fontWeight: 700,
    },
    addDescription : {
        fontSize: 14,
        fontWeight: 400,
        color: "#666C92"
    },
    addTitleContainer : {
        flexDirection : 'column',
        alignItems: "flex-start",
        rowGap: 5,
        width: "100%",
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        height: 40, 
        padding: 0,
        textAlignVertical: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
    },
    addBirthday: {
        flexDirection: 'row',
        columnGap: 10
    },
    form: {
        rowGap: 10
    }
})