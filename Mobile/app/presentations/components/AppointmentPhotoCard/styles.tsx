import { StyleSheet } from "react-native";
import {Theme} from '../../../resources/themes'

export const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 4,
        margin: 16,
        width: 220
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    videoButton: {
        position: 'absolute',
        top: 16,
        right: 16,
        backgroundColor: Theme.PRIMARY_COLOR,
        padding: 10,
        height: 35,
        width: 35,
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "rgba(255, 255, 255, 1)",
        borderRadius: 80
    },
    infoContainer: {
        width: '92%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 10,
        borderRadius: 10,
        marginTop: -83,
        flexDirection: "column",
        //alignItems: "center",
        alignSelf: 'center'
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    name: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
    },
    specialtyTag: {
        backgroundColor: '#F0D264',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    specialtyText: {
        fontSize: 10,
        color: '#fff',
        fontWeight: '600',
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 6,
        borderRadius: 10,
        gap: 6,
    },
    detailText: {
        fontSize: 10,
        color: '#333',
    },
});
