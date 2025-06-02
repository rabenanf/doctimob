import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  buttonStyle: {
    height: verticalScale(50),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: verticalScale(10),
  },
  textButton: {
    fontSize: moderateScale(14),
    fontWeight: 700,
  },
});
