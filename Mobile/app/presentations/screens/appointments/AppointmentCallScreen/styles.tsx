import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    whiteButton : {
        height: 50,
        width: 50,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        borderRadius: 50
    },
    redButton : {
        height: 50,
        width: 50,
        backgroundColor: "rgba(255, 78, 0, 1)",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        borderRadius: 50
    },
    buttonContainer : {
        flexDirection : 'row',
        alignItems: "center",
        justifyContent: "space-between",
    },
    doctorContainer : {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        alignItems: "center",
        columnGap: 10,
        paddingVertical: 5,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight: 15,
    },
    avatar : {
        width: 50,
        height: 50,
        borderRadius: 40
    },
    headerContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingHorizontal : 30,
        paddingTop : 30
    },
    myPicture : {
        width: 100,
        height: 150,
        borderRadius: 20
    },
    bottomContainer : {
        rowGap : 15, 
        paddingHorizontal: 30 
    },
    doctorImage : {
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'space-between'
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
    doctorInfoContainer : {
        flexDirection: 'row', 
        columnGap: 10
    },
    doctorNameContainer : {
        rowGap: 7, 
        alignItems: "center", 
        justifyContent: "center"
    },
    doctorName : {
        alignSelf : 'flex-start',
        color: "rgba(21, 44, 42, 1)",
        fontSize: 14,
        fontWeight: 700
    },
    specialty : {
        alignSelf : 'flex-start',
        color: "rgba(102, 108, 146, 1)",
        fontSize: 12,
        fontWeight: 400
    },
    duration : {
        alignSelf : 'center',
        color: "rgba(21, 44, 42, 1)",
        fontSize: 12,
        fontWeight: 400
    }
})