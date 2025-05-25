import { StyleSheet } from "react-native";
import {Theme} from '../../../../resources/themes'

export const styles = StyleSheet.create({
    homeContainer : {
        flex: 1,
        flexDirection: 'column', 
        alignItems: 'center',
    },
    appointmentContainer : {
        height: '50%'
    },
    requestContainer : {
        flex : 1
    },
    headerHome : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal : 20,
        paddingTop : 20
    },
    sectionTitle : {
        flexDirection: 'column'
    },
    txtNew: {
        textAlign: "left",
        fontSize: 10,
        fontWeight: 400
    },
    txtTitle : {
        textAlign: "left",
        fontSize: 20,
        fontWeight: 700
    },
    headerViewAll : {
        alignSelf: 'center'
    },
    txtViewAll : {
        textAlign: "left",
        color: Theme.PRIMARY_COLOR,
        fontSize: 12,
        fontWeight: 700
    },
    scrollContainer: {
        paddingHorizontal: 16,
        gap: 6, 
    },
    requestListContainer: {
        paddingHorizontal : 10,
        paddingBottom: 80
    }    
});