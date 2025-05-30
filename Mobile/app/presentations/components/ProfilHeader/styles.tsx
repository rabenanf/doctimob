import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 30,
    overflow: "hidden",
  },
  profilContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    // backgroundColor: "rgba(255, 255, 255, 0.75)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    // rowGap: 5,
    // paddingLeft: 15,
  },
  welcomeback: {
    textAlign: "left",
    color: "rgba(102, 108, 146, 1)",
    fontSize: 12,
    fontWeight: 400,
  },
  name: {
    textAlign: "left",
    color: "rgba(21, 44, 42, 1)",
    fontSize: 12,
    fontWeight: 700,
  },
  notification: {
    height: 40,
    width: 40,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 80,
  },
  boldNotificationsBell: {
    height: 20,
    width: 20,
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: 5,
  },
  bell: {
    top: 2,
    right: 3,
    bottom: 2,
    left: 3,
    overflow: "visible",
  },
  // badge: {
  //   top: 1,
  //   left: 29,
  //   width: 10,
  //   height: 10,
  //   overflow: "visible",
  // },

  notificationContainer: {
    width: 48,
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    elevation: 20, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  badge: {
    position: "absolute",
    top: 2,
    right: 2,
    width: 12,
    height: 12,
    backgroundColor: "#FF4500",
    borderRadius: 10,
  },
  glass: {
    // width: 300,
    // padding: 20,
    // borderRadius: 20,
    // alignItems: "center",

    // Translucent background color
    backgroundColor: "rgba(255, 255, 255, 0.1)",

    // Optional border
    // borderColor: 'rgba(255, 255, 255, 0.3)',
    // borderWidth: 1,
  },
});
