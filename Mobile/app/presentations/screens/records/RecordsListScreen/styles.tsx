import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingVertical: 30,
        paddingHorizontal: 30
    },
    title: {

    },
    titleTop: {
        color: "rgba(21, 44, 42, 1)",
        fontSize: 12,
        fontWeight: 400
    },
    titleBottom : {
        textAlign: "left",
        color: "rgba(21, 44, 42, 1)",
        fontSize: 20,
        fontWeight: 700
    },
    download : {
        flexDirection: 'row',
        columnGap: 10
    },
    downloadView : {

    },
    downloadIcon : {
        height: 36,
        width: 36,
        backgroundColor: "rgba(87, 207, 200, 1)",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        borderRadius: 80
    },
    downloadText : {
        color: "rgba(21, 44, 42, 1)",
        fontSize: 12,
        fontWeight: 700
    },
    filterContainer: {
        paddingHorizontal: 30
    },
    scrollView: {

    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 12,
        color: '#1E1E1E',
    },
    scroll: {
        flexDirection: 'row',
    },
    pill: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#F6F7FF',
        borderRadius: 20,
        marginRight: 8,
    },
    pillActive: {
        backgroundColor: '#1E1E1E',
    },
    pillText: {
        color: '#6B6B8B',
        fontWeight: '500',
    },
    pillTextActive: {
        color: '#fff',
        fontWeight: 'bold',
    },
    listContainer: {
        paddingHorizontal: 30,
        paddingTop : 20,
        rowGap: 16
    }
});