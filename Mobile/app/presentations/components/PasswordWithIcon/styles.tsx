import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E5E7F3",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: scale(10),
    paddingVertical: 0,
    backgroundColor: "#F7F8FF",
    marginVertical: verticalScale(6),
    gap: 10,
    height: verticalScale(45),
  },
  input: {
    flex: 1,
    fontSize: moderateScale(12),
    color: "#333",
    height: verticalScale(40),
    padding: 0,
    textAlignVertical: "center",
  },
  icon: {
    fontSize: moderateScale(20),
  },
  iconLeft: {
    fontSize: moderateScale(20),
  },
  errorText: {
    color: "red",
    marginTop: 4,
    fontSize: moderateScale(12),
  },
});
