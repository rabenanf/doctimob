import { Platform, StyleSheet } from "react-native";

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
        flexDirection: 'column',
        flex : 1,
        paddingBottom : Platform.select({ios : 140, android : 93}),
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
        bottom: Platform.select({ios : 60, android : 30}),
        left: 0,
        right: 0,
        paddingHorizontal: 30,
    },
    medicalInfo : {
        paddingTop : 16,
        rowGap : 10
    },
    dateTime : {
        paddingTop : 16,
        rowGap : 16
    },
    consultation : {
        paddingTop : 16,
        rowGap : 16
    },
    payment : {
        flexDirection : 'column',
        rowGap : 10,
        paddingTop : 16
    },
    sectionTitle : {
        fontSize: 14,
        fontWeight: 700
    },
    methodContainer : {
        flexDirection : 'row',
        columnGap : 20
    },
    methodSelected : {
        height: 50,
        backgroundColor: "rgba(87, 207, 200, 1)",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 5,
        //padding: 15,
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
        //padding: 15,
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
    type : {
        backgroundColor: "rgba(87, 207, 200, 1)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        height: 30,
        width: 30
    },
    typeSelected : {
        backgroundColor: "rgba(129, 227, 222, 1)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        height: 30,
        width: 30
    },
    shareHistoryContainer : {
        backgroundColor: "rgba(247, 248, 255, 1)",
        alignItems: "center",
        columnGap: 10,
        padding: 20,
        borderRadius: 10
    },
    descriptionText: {
        borderStyle: "solid",
        backgroundColor: "rgba(247, 248, 255, 1)",
        padding: 20,
        borderWidth: 1,
        borderColor: "rgba(229, 231, 243, 1)",
        borderRadius: 10
    }
})