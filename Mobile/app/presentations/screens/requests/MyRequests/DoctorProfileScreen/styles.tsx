import { StyleSheet } from "react-native";
import { Theme } from "../../../../../resources/themes"

export const styles = StyleSheet.create({
    doctorContainer : {
        flexDirection: 'column',
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 10,
        padding: 20,
        flex : 1,
    },
    profile : {
        alignContent: 'center',
        flexDirection: 'column',
        gap : 15,
        paddingBottom : 20,
        justifyContent: "center",
        width : '100%'
    },
    score : {
        flexDirection: 'row',
        backgroundColor: "rgba(247, 248, 255, 1)",
        alignItems: "center",
        paddingHorizontal: 0,
        paddingVertical: 20,
        borderRadius: 20,
        justifyContent : 'space-between',
        boxShadow : '0 21 15 -3 rgba(0,0,0,0.1);'
    },
    scoreItem : {
        flexDirection: "column",
        alignItems: "center",
        rowGap: 10,
        borderRadius: 10,
        width : '33%',
        justifyContent: 'center',
    },
    scoreItemValue : {
        textAlign: "center",
        fontSize: 14,
        fontWeight: 700
    },
    scoreItemLabel : {
        textAlign: "center",
        fontSize: 12,
        fontWeight: 400
    },
    scoreSeparator : {
        width: 2,
        height: '100%',
        backgroundColor: "rgba(229, 231, 243, 1)"
    },
    tabBar : {
        backgroundColor: "rgba(247, 248, 255, 1)",
        borderRadius: 20,
        flexDirection: 'row',
        width: '100%'
    },
    indicatorStyle: {
        backgroundColor: 'transparent',
        height: 0,
    },
    tabStyle: {
        borderRadius: 15,
        flex: 1,
        padding: 12,
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: '#152c2a',
    },
    inactiveTab: {
        backgroundColor: 'white',
    },
    activeLabel: {
        color: 'white',
        fontSize: 14,
        fontWeight: 700
    },
    inactiveLabel: {
        color: '#152c2a',
        fontSize: 14,
        fontWeight: 400
    },
    rate : {
        flexDirection : 'row',
        alignItems: "center",
        justifyContent : 'center',
        backgroundColor: "rgba(255, 209, 1, 1)",
        columnGap: 5,
        padding: 5,
        borderRadius: 5,
    },
    rateText : {
        fontSize: 10,
        fontWeight: 700
    },
    specialty : {
        alignSelf: "flex-start",
        columnGap: 10,
        paddingHorizontal: 6,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: Theme.PRIMARY_COLOR,
        fontSize: 10,
        fontWeight: 400
    },
    name : {
        fontSize: 16,
        fontWeight: 700,
        textAlign:  'center'
    },
    image : {
        width: 150,
        height: 150,
        backgroundColor: "rgba(217, 217, 217, 1)",
        borderRadius: 10,
        alignSelf : 'center',
        resizeMode : 'cover'
    },
    experience : {
        backgroundColor: "rgba(247, 248, 255, 1)",
        alignItems: "flex-start",
        columnGap: 15,
        padding: 25,
        borderRadius: 20,
        flexDirection: 'row',
    },
    rateReview : {
        flexDirection : 'column',
        alignItems: "center",
        justifyContent : 'center',
        backgroundColor : 'white',
        paddingVertical : 10,
        borderRadius: 20,
        rowGap : 5
        
    },
    rateReviewText : {
        fontSize: 48,
        fontWeight: 700
    },
    reviews : {
        color: "rgba(102, 108, 146, 1)",
        fontSize: 14,
        fontWeight: 400
    }
}) 