import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderRadius: 10,
        backgroundColor: '#f2f2f2', // Light background color
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        margin: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 700,
    },
    specialty: {
        fontSize: 14,
        color: '#555',
    },
    time: {
        fontSize: 16,
        fontWeight: 700,
        marginLeft: 10,
    },
});