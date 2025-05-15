import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'column',
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 10,
        padding: 20,
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
    appointmentListContainer: {
        paddingTop : 16,
        paddingHorizontal : 20,
        rowGap : 16
    },
    tabBar : {
        marginHorizontal : 20,
        backgroundColor: "rgba(247, 248, 255, 1)",
        borderRadius: 20,
        flexDirection: 'row'
    },
    indicatorStyle: {
        backgroundColor: 'transparent',
        height: 0,
    },
    tabStyle: {
        borderRadius: 10,
        flex: 1,
        padding: 12,
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: '#152c2a',
    },
    inactiveTab: {
        backgroundColor: 'white',
    },
    activeLabel: {
        color: 'white',
        fontSize: 14,
        fontWeight: 700
    },
    inactiveLabel: {
        color: '#152c2a',
        fontSize: 14,
        fontWeight: 400
    },
})