import { StyleSheet } from "react-native";
import { Theme } from '../../../resources/themes';

export const styles = StyleSheet.create({
    background: {
        flex: 1.4,
        justifyContent: 'space-between',
        resizeMode: 'cover',
    },
    topButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginHorizontal: 20,
    },
    arrowContainer: {
        height: 40,
        width: 40,
        backgroundColor: "#CCD0E7",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40
    },
    vectorStroke: {
        alignSelf: 'center',
        overflow: "visible"
    },
    iconButton: {
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
        borderColor: "rgba(255, 255, 255, 1)",
        borderStyle: "solid",
        borderWidth: 2,
        backgroundColor: "rgba(87, 207, 200, 1)",
    }, 
    bottomCard: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        marginBottom: 30,
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 10,
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 30,
        alignSelf: 'center'
    },
    infoRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name: {
        color: "rgba(21, 44, 42, 1)",
        fontSize: 12,
        fontWeight: 700     
    },
    specialtyBadge: {
        backgroundColor: Theme.PRIMARY_COLOR,
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        padding: 5,
        borderRadius: 5 
    },
    specialtyText: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 10,
        fontWeight: 400
    },
    dateTimeRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "rgba(255, 255, 255, 1)",
        columnGap: 5,
        padding: 5,
        borderRadius: 5
    },
    dateText: {
        color: "rgba(21, 44, 42, 1)",
        fontSize: 10,
        fontWeight: 400
    },
    cancelButton: {
        flexDirection: 'row',
        backgroundColor: "rgba(255, 78, 0, 1)",
        alignSelf: 'flex-end',
        columnGap: 5,
        paddingVertical: 5,
        paddingLeft: 5,
        paddingRight: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    cancelText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 700
    },
});
