import { StyleSheet } from "react-native";
import {Theme} from '../../../resources/themes'

export const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectContainer : {
        flexDirection : 'column',
        alignItems: "center",
        rowGap: 30,
        borderRadius: 30,
        backgroundColor : "white",
        justifyContent: 'center',
        padding: 20,
        width : '95%'
    },
    rectangle : {
        width: 100,
        height: 5,
        backgroundColor: "rgba(229, 231, 243, 1)",
        borderRadius: 10
    },
    titleContainer : {
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 10,
        width: '100%'
    },
    title : {
        fontSize: 20,
        fontWeight: 700
    },
    description : {
        fontSize: 14,
        fontWeight: 400
    },
    doctor : {
        padding: 10,
        borderWidth: 1,
        borderColor: "rgba(229, 231, 243, 1)",
        borderRadius: 10,
        flexDirection: "row",
        width: '100%',
        columnGap: 15
    },
    image : {
        width: 50,
        height: 50,
        borderRadius: 5
    },
    nameContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        flex : 1
    },
    name : {
        fontSize: 12,
        fontWeight: 700
    },
    specialty : {
        backgroundColor: "rgba(229, 231, 243, 1)",
        paddingHorizontal: 6,
        paddingVertical: 5,
        borderRadius: 5,
        fontSize: 10,
        fontWeight: 400
    },
    price : {
        justifyContent: 'center',
        alignContent:'center'
    },
    priceText : {
        fontSize: 16,
        fontWeight: 700
    },
    request : {
        flexDirection : 'row',
        justifyContent : 'space-between', 
        width : '100%',
        backgroundColor: "rgba(247, 248, 255, 1)",
        padding: 15,
        borderRadius: 10
    },
    iconCircle : {
        backgroundColor: Theme.PRIMARY_COLOR,
        padding: 10,
        height: 35,
        width: 35,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
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
    action : {
        flexDirection : "column",
        width : "100%"
    },
    cancelContainer : {
        height: 50,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
    },
    cancel : {
        fontSize: 14,
        fontWeight: 700
    }

})