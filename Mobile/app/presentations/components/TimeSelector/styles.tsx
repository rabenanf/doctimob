import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerTimes: {
    },
    timeList: {
        columnGap : 8
    },
    timeItem: {
        backgroundColor: "rgba(247, 248, 255, 1)",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        rowGap : 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeText: {
        fontSize: 12,
        fontWeight: 400
    },
    periodText: {
        fontSize: 12,
        fontWeight: 400
    },
    selectedText: {
        color: 'white',
    },
});
