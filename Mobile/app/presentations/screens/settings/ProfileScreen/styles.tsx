import { StyleSheet } from "react-native";

const SIZE = 120;

export const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'column',
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 10,
        paddingVertical: 30,
        paddingHorizontal: 30
    },
    title : {
        textAlign: "left",
        color: "rgba(21, 44, 42, 1)",
        fontSize: 32,
        fontWeight: 700
    },
    description : {
        textAlign: "left",
        color: "rgba(102, 108, 146, 1)",
        fontSize: 14,
        fontWeight: 400
    },
    detailContainer : {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingBottom: 90
    },
    imageContainer: {
        width: SIZE,
        height: SIZE,
        justifyContent: 'center',
        alignSelf: "center"
    },
    photoContainer: {
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        borderRadius: 3,
        backgroundColor: '#fff',
        padding: 5,
        elevation: 3, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    btnContainer : {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 30,
    },
    form : {
        width: '100%',
        paddingHorizontal: 30,
        paddingTop: 30,
        rowGap: 7
    },
    addBirthday: {
        flexDirection: 'row',
        columnGap: 10
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        height: 40, 
        padding: 0,
        textAlignVertical: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        marginBottom: 5
    },
});