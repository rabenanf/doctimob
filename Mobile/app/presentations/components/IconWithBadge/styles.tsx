import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        right: -10,
        top: -10,
        backgroundColor: 'red',
        borderRadius: 8,
        minWidth: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 4,
    },
    badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 700,
    },
});
