import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
        fontSize: 20,
    },
     
    iconLeft: {
        fontSize: 20,
    },
    errorText: {
        color: 'red',
        marginTop: 4,
        fontSize: 13,
    },
});