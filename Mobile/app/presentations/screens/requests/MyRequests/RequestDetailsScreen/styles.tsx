import { StyleSheet } from "react-native";
import { Theme } from "../../../../../resources/themes"

export const styles = StyleSheet.create({
    detailContainer: {
        padding: 20,
        gap: 16
    },
    responseContainer: {
        paddingHorizontal: 20,
        flex: 1
    },
    requestHeader: {
        flexDirection: 'row',
        backgroundColor: '#F5F7FE',
        padding: 12,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    requestType: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    iconSeen: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 4,
        paddingHorizontal: 8,
        gap: 4,
        backgroundColor: '#6C669F'
    },
    iconResponded: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 4,
        paddingHorizontal: 8,
        gap: 4,
        backgroundColor: '#E9C95A'
    },
    iconCircle: {
        backgroundColor: Theme.PRIMARY_COLOR,
        padding: 10,
        height: 35,
        width: 35,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    requestSeen: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    requestResponded: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    typeText: {
        color: "rgba(21, 44, 42, 1)",
        fontSize: 10,
        fontWeight: 700
    },
    statText: {
        color: "rgba(21, 44, 42, 1)",
        fontSize: 12,
        fontWeight: 700
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    requestInfoContainer: {
        backgroundColor: '#F5F7FE',
        padding: 16,
        borderRadius: 16,
    },
    col: {
        flex: 1,
        marginRight: 10,
    },
    label: {
        color: '#6E7191',
        fontSize: 14,
        marginBottom: 2,
    },
    valueBold: {
        color: '#14142B',
        fontSize: 15,
        fontWeight: '700',
    },
    pill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Theme.PRIMARY_COLOR,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
    },
    pillText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 10,
    },
    cancelButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#B74B25',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
    },
    cancelText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 10,
    },
    dateContainer: {
        backgroundColor: '#F5F7FE',
        padding: 16,
        borderRadius: 16,
    },
    dateTitle: {
        color: '#6E7191',
        fontSize: 14,
        marginBottom: 12,
        fontWeight: '500',
    },
    dateRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    noResponse: {
        textAlign: "center",
        color: "rgba(21, 44, 42, 1)",
        fontSize: 20,
        fontWeight: 700
    },
    withResponse: {
        textAlign: "left",
        color: "rgba(21, 44, 42, 1)",
        fontSize: 20,
        fontWeight: 700
    },
    willNotify: {
        textAlign: "center",
        color: "rgba(102, 108, 146, 1)",
        fontSize: 14,
        fontWeight: 400
    }
})