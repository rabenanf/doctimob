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
    containerNumber : {
        flexDirection: 'row',
        columnGap: 10,
        alignItems: "center",
    },
    numberText : {

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
    btnContainer : {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 30,
    }
})