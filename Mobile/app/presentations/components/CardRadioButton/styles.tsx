import { StyleSheet } from "react-native";
import { Theme } from '../../../resources/themes';

export const styles = StyleSheet.create({
    radioContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 0,
        borderWidth: 1,
        borderColor: "rgba(229, 231, 243, 1)",
        borderRadius: 20
    },
    radioButtonIcon: {
        backgroundColor: "white",
        borderWidth: 3,
        borderColor: Theme.PRIMARY_COLOR,
        height: 24,
        width: 24,
        borderRadius: 24 / 2,
        marginRight: 20,
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
        flexDirection : "row",
        alignItems: "center",
    },
    radioButtonText: {
        paddingLeft: 10,
        fontSize: 16,
        color: "#999"
    },
});