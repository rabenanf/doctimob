import { StyleSheet } from "react-native";
import {Theme} from '../../../resources/themes'

export const styles = StyleSheet.create({
    responseContainer : {
        alignContent : 'center',
        flexDirection : 'column',
        rowGap: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: "rgba(229, 231, 243, 1)",
        borderRadius: 20,
        marginTop: 10
    },
    responseHeader : {
        alignContent : 'space-between',
        flexDirection : 'row'
    },
    responseMessage : {
        justifyContent : 'flex-start'
    },
    responseFooter : {
        justifyContent : 'space-between',
        flexDirection : 'row',
        flex : 1
    },
    price : {
        fontSize: 16,
        fontWeight: 700
    },
    image : {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: "hidden",
    },
    message : {
        fontSize: 12,
        fontWeight: 400,
        textAlign: "left",
        fontStyle: 'italic'
    },
    name : {
        fontSize: 12,
        fontWeight: 700,
        textAlign: "left"
    },
    rate : {
        flexDirection : 'row',
        alignItems: "center",
        justifyContent : 'flex-end',
        backgroundColor: "rgba(255, 209, 1, 1)",
        columnGap: 5,
        padding: 5,
        borderRadius: 5,
    },
    rateText : {
        fontSize: 10,
        fontWeight: 700
    },
    profil : {
        backgroundColor: "rgba(229, 231, 243, 1)",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        paddingHorizontal: 6,
        paddingVertical: 5,
        borderRadius: 5
    },
    profilText : {
        fontSize: 12,
        fontWeight: 700
    },
    specialty : {
        alignSelf: "flex-start",
        columnGap: 10,
        paddingHorizontal: 6,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: "rgba(229, 231, 243, 1)",
        fontSize: 10,
        fontWeight: 400
    },
    select : {
        backgroundColor : Theme.PRIMARY_COLOR,
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 10
    },
    selectText : {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 12,
        fontWeight: 700     
    },
    nameContainer : {
        paddingLeft : 10,
        flexDirection : 'row',
        justifyContent: "space-between",
        flex : 1,
        alignItems: "flex-end"
    }
});