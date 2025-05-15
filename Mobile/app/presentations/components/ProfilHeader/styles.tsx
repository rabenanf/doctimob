import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: "hidden",
    },
    profilContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 10,
        paddingHorizontal: 30
    },
    textContainer: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        flex: 1,
        rowGap: 10,
        paddingLeft: 15
    },
    welcomeback: {
        textAlign: "left",
        color: "rgba(102, 108, 146, 1)",
        fontSize: 12,
        fontWeight: 400
    },
    name: {
        textAlign: "left",
        color: "rgba(21, 44, 42, 1)",
        fontSize: 12,
        fontWeight: 700
    },
    notification: {
        height: 40,
        width: 40,
        backgroundColor: "rgba(255, 255, 255, 1)",
        shadowColor: "rgba(0, 0, 0, 0.08)",
        shadowOffset: {
                width: 0,
                height: 4
            },
        shadowRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 80
    },
    boldNotificationsBell: {
        height: 20,
        width: 20,
        flexDirection: "column",
        alignItems: "flex-start",
        borderRadius: 5
    },
    bell: {
        top: 2,
        right: 3,
        bottom: 2,
        left: 3,
        overflow: "visible"
    },
    badge: {
        top: 1,
        left: 29,
        width: 10,
        height: 10,
        overflow: "visible"
    }
});