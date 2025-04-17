import { StyleSheet } from "react-native";
import { Theme } from '../../../resources/themes';

export const styles = StyleSheet.create({
    radioContainer: {
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
    },
    radioButtonIcon: {
        backgroundColor: "white",
        borderWidth: 3,
        borderColor: Theme.PRIMARY_COLOR,
        height: 24,
        width: 24,
        borderRadius: 24 / 2,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    radioButtonIconInnerIcon: {
        height: 20,
        width: 20,
        backgroundColor: Theme.PRIMARY_COLOR,
        borderRadius: 20 / 2,
        borderWidth: 3,
        borderColor: "white",
    },
    radioButtonTextContainer: {
        height: 50,
        justifyContent: "center",
        paddingLeft: 10,
        flexDirection : "row"
    },
    radioButtonText: {
        fontSize: 16,
        color: "#999"
    },
});