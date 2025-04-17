import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#fff',
        marginVertical: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    icon: {
        paddingLeft: 8,
    },
    iconLeft: {
        paddingRight: 8,
    },
    errorText: {
        color: 'red',
        marginTop: 4,
        fontSize: 13,
    },
});