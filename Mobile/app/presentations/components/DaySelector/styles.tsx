import { StyleSheet } from "react-native";
import {Theme} from '../../../resources/themes';

export const styles = StyleSheet.create({
    list: {
        columnGap : 8
    },
    card: {
        backgroundColor: "rgba(247, 248, 255, 1)",
        borderRadius: 10,
        padding: 10,
        width: 60,
        alignItems: 'center',
        rowGap : 20,
    },
    selectedCard: {
        backgroundColor: Theme.PRIMARY_COLOR,
    },
    label: {
        fontSize: 12,
        fontWeight: 400
    },
    selectedLabel: {
        color: '#fff',
    },
    day: {
        fontSize: 12,
        fontWeight: 400,
        marginTop: 4,
    },
    selectedDay: {
        color: '#fff',
    },
});
