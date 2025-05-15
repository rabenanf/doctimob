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
    doctorCard : {
        paddingLeft: 10,
        paddingRight: 20,
        borderStyle: "solid",
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        columnGap: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "rgba(229, 231, 243, 1)",
        borderRadius: 10,
        marginHorizontal: 30
    },
    rate : {
        flexDirection : 'row',
        alignItems: "center",
        justifyContent : 'flex-end',
        backgroundColor: "rgba(255, 209, 1, 1)",
        columnGap: 5,
        padding: 5,
        borderRadius: 5,
    },
    rateText : {
        fontSize: 10,
        fontWeight: 700
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 5
    },
    content : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        flex : 1,
        alignItems : 'center'
    },
    header : {
        rowGap : 10,
    },
    review : {
        rowGap : 10,
        alignItems: "flex-end",
        justifyContent: "center",
    },
    reviewCount : {
        color: "rgba(21, 44, 42, 1)",
        fontSize: 12,
        fontWeight: 400
    },
    name : {
        color: "rgba(21, 44, 42, 1)",
        fontSize: 12,
        fontWeight: 700
    },
    badge : {
        backgroundColor: "rgba(229, 231, 243, 1)",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        paddingHorizontal: 6,
        paddingVertical: 5,
        borderRadius: 5
    },
    badgeText : {
        color: "rgba(21, 44, 42, 1)",
        fontSize: 10,
        fontWeight: 400
    },
    stars: {
        borderStyle: "solid",
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        columnGap: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "rgba(229, 231, 243, 1)",
        borderRadius: 10,
        marginHorizontal: 30,
        justifyContent: 'center',
        marginTop : 30
    },
    feedback: {
        marginHorizontal: 30,
        justifyContent: 'flex-start',
        marginTop : 30,
        rowGap : 15
    },
    feedbackText: {
        color: "rgba(21, 44, 42, 1)",
        fontSize: 12,
        fontWeight: 400
    },
    feedbackInput: {
        backgroundColor: "rgba(247, 248, 255, 1)",
        display: "flex",
        columnGap: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: "rgba(229, 231, 243, 1)",
        borderRadius: 10
    },
    btnContainer : {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 30,
    } 
})