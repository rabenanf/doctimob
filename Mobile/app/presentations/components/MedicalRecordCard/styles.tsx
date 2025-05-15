import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#E6E8F0',
        borderRadius: 16,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 10
    },
    info: {
        marginLeft: 12,
        flex: 1,
    },
    name: {
        fontSize: 12,
        fontWeight: 700,
        color: "rgba(21, 44, 42, 1)",
    },
    specialtyBadge: {
        backgroundColor: 'rgba(229, 231, 243, 1)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        marginTop: 4,
        alignSelf: 'flex-start',
    },
    specialtyText: {
        fontSize: 10,
        fontWeight: 400,
        color: "rgba(21, 44, 42, 1)",
    },
    datetime: {
        alignItems: 'flex-end',
    },
    date: {
        fontSize: 12,
        fontWeight: 400,
        color: "rgba(21, 44, 42, 1)",
        marginBottom: 4,
    },
    timeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
        fontSize: 12,
        fontWeight: 400,
        marginRight: 4,
    },
    amBadge: {
        backgroundColor: "rgba(87, 207, 200, 1)",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    amText: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 8,
        fontWeight: 400
    },
    summaryBox: {
        backgroundColor: "rgba(247, 248, 255, 1)",
        padding: 12,
        borderRadius: 12,
        marginTop: 16,
    },
    summaryTitle: {
        color: "rgba(21, 44, 42, 1)",
        fontSize: 12,
        fontWeight: 700,
        marginBottom: 4
    },
    summaryText: {
        color: "rgba(102, 108, 146, 1)",
        fontSize: 12,
        fontWeight: 400
    },
});
