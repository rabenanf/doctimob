import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        shadowColor: "rgba(0, 0, 0, 0.08)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 20,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: 700,
        color: "rgba(21, 44, 42, 1)",
    },
    badge: {
        marginTop: 4,
        backgroundColor: "rgba(233, 203, 108, 1)", // jaune pastel comme sur ton screen
        padding : 5,
        borderRadius: 6,
        alignSelf: 'flex-start',
    },
    badgeText: {
        fontSize: 12,
        fontWeight: 400,
        color: '#fff',
    },
    closeButton: {
        width: 40,
        height: 40,
        backgroundColor: "rgba(247, 248, 255, 1)",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        borderRadius: 40
    },
});
