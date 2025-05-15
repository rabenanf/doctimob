import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    appointmentContainer: {
        paddingTop: 20,
        rowGap: 20,
        paddingHorizontal: 30,
        flex : 1,
        paddingBottom : 80
    },
    btnContainer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 30,
    },
    iconContainer: {
        height: 36,
        width: 36,
        backgroundColor: "rgba(229, 231, 243, 1)",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        borderRadius: 5
    },
    detailContainer: {
        borderStyle: "solid",
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "center",
        columnGap: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: "rgba(229, 231, 243, 1)",
        borderRadius: 10,
        flexDirection: 'row'
    },
    descContainer: {
        flex: 1,
        flexDirection: 'column',
        rowGap: 4
    },
    desc: {
        color: "rgba(102, 108, 146, 1)",
        fontSize: 12,
        fontWeight: 400
    },
    value: {
        color: "rgba(21, 44, 42, 1)",
        fontSize: 16,
        fontWeight: 700
    },
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 5,
    },
    badge: {
        position: 'absolute',
        top: -4,
        right: -4,
        backgroundColor: '#C2410C',
        width: 18,
        height: 18,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
})