import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  arrowContainer: {
    height: 40,
    width: 40,
    backgroundColor: "#CCD0E7",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    paddingVertical: 10,
  },
  vectorStroke: {
    alignSelf: "center",
    overflow: "visible",
  },
  title: {
    textAlign: "center",
    color: "rgba(21, 44, 42, 1)",
    fontSize: 14,
    fontWeight: 400,
  },
  notification: {
    height: 40,
    width: 40,
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
