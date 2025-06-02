import { StyleSheet } from "react-native";
import { Theme } from "../../../../../resources/themes"

export const styles = StyleSheet.create({
    confirmedContainer : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'column',
        paddingHorizontal : 30,
        gap : 20
    },
    confirmedTitle : {
        fontSize: 24,
        fontWeight: 700,
        textAlign : 'center'
    },
    image : {
        width: 60,
        height: 65,
        borderRadius: 10,
        alignSelf : 'center'
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
    appointmentContainer : {
        flexDirection : 'row',
        width : '100%',
        rowGap : 10,
        columnGap: 15,
        padding: 15,
        borderWidth: 1,
        borderColor: "rgba(229, 231, 243, 1)",
        borderRadius: 20
    },
    doctorNameContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    detailContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    appointmentInfo : {
        flex : 1,
        gap : 10
    },
    detail : {
        flexDirection : 'row',
        gap : 10
    },
    name : {
        fontSize: 12,
        fontWeight: 700,
        flexWrap: 'wrap',
        width: '50%'
    },
    specialty : {
        backgroundColor: "rgba(229, 231, 243, 1)",
        paddingHorizontal: 6,
        paddingVertical: 5,
        borderRadius: 5,
        fontSize: 12,
        fontWeight: 400
    },
    pill: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pillText: {
        fontWeight: '600',
        fontSize: 12,
    },
    highlightText: {
        backgroundColor : Theme.PRIMARY_COLOR,
        fontWeight: '600',
        fontSize: 10,
    },
})
