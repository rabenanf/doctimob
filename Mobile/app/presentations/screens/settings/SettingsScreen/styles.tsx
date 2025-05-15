import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'column',
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 10,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    detailContainer: {
        borderStyle: "solid",
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 0,
        borderWidth: 1,
        borderColor: "rgba(229, 231, 243, 1)",
        borderRadius: 20,
        marginHorizontal: 30,
        marginBottom: 30,
        overflow: "hidden"
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
    logoutContainer: {
        borderStyle: "solid",
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(229, 231, 243, 1)",
        borderRadius: 20,
        marginHorizontal: 30,
        padding: 15,
        columnGap: 10
    },
    item : {
        flexDirection: "row",
        padding: 15,
        borderBottomWidth: 1,
        borderColor: "rgba(229, 231, 243, 1)",
        justifyContent: "space-between",
        width : "100%"
    },
    itemIcon : {
        flexDirection: "row",
        columnGap: 10,
    },
    itemText : {
        fontSize: 12,
        fontWeight: 400,
        alignSelf: "center"
    },
    itemArrow : {
        flexDirection: "row",
        columnGap: 10,
        alignItems: "center"
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
    form: {
        columnGap: 10,
        flexDirection : "row",
    },
    action : {
        flexDirection : "row",
        columnGap : 10
    },
    methodSelected : {
        height: 50,
        backgroundColor: "rgba(87, 207, 200, 1)",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 5,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        flex : 1
    },
    method : {
        height: 50,
        backgroundColor: "rgba(247, 248, 255, 1)",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 5,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        flex : 1
    },
    textSelected : {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 10,
        fontWeight: 700
    },
    text : {
        color: "rgba(21, 44, 42, 1)",
        fontSize: 10,
        fontWeight: 400
    },
})