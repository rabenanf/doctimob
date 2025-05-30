import { StyleSheet } from "react-native";

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
    btnContainer : {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 30,
    },
    detailContainer : {
        paddingHorizontal : 30,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#E5E7F3',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 0,
        backgroundColor: '#F7F8FF',
        marginVertical: 6,
        gap: 10,
        height: 40,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        height: 40, 
        padding: 0,
        textAlignVertical: 'center',
    },
    icon: {
        paddingHorizontal: 6,
    },
    errorText: {
        color: 'red',
        marginTop: 4,
        fontSize: 13,
    }
})
