import { StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  //   tabBarStyle: {
  //     position: "absolute",
  //     left: 20,
  //     right: 20,
  //     backgroundColor: "rgba(255, 255, 255, 0.75)",
  //     shadowColor: "rgba(0, 0, 0, 0.08)",
  //     shadowOffset: {
  //       width: 0,
  //       height: -4,
  //     },
  //     shadowRadius: 20,
  //     height: 70,
  //   },

  tabBarStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    height: verticalScale(70),
    paddingTop: 10,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 10,
    elevation: 20,
  },
  container: {
    position: "relative",
    paddingTop: 0,
    paddingBottom: 50,
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 0,
  },
  customTabBarStyle: {
    height: 60,
    width: 60,
    borderStyle: "solid",
    backgroundColor: "rgba(87, 207, 200, 1)",
    shadowColor: "rgba(87, 207, 200, 0.5)",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "rgba(255, 255, 255, 1)",
    borderRadius: 80,
  },

  contentTabBarStyle: {
    height: 24,
    width: 24,
    flexDirection: "column",
    alignItems: "flex-start",
  },

  plusTabBarstyle: {
    top: 0,
    right: 2,
    bottom: 2,
    left: 0,
    overflow: "visible",
  },
});
