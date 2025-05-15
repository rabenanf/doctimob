import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    preview : {
        backgroundColor: "rgba(247, 248, 255, 1)",
        alignItems: "center",
        columnGap: 15,
        padding: 15,
        borderRadius: 20,
        flexDirection: 'row'
    },
    feedbackContainer : {
        backgroundColor: "#E9CB6C26",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 10,
        paddingHorizontal: 0,
        paddingVertical: 20,
        borderRadius: 20,
        position: 'absolute',
        bottom: 10,
        width: "100%",
        alignSelf: "center"
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 12,
        marginRight: 16,
        resizeMode: 'cover',
    },
    star: {
        flexDirection: "row",
        columnGap: 5
    },
    feedbackButton: {
        flexDirection: "row",
        backgroundColor: "rgba(233, 203, 108, 1)",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        height: 30
    },
    feedbackText: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 14,
        fontWeight: 700
    },
    rate: {
        color: "rgba(0, 0, 0, 1)",
        fontSize: 14,
        fontWeight: 700
    },
    name: {
        color: "rgba(233, 203, 108, 1)",
        fontSize: 14,
        fontWeight: 700
    }
})