import { StyleSheet } from "react-native";
import { Theme } from "../../../../resources/themes";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: verticalScale(223),
    width: scale(178),
  },
  textContainer: {
    paddingHorizontal: scale(30),
    // paddingVertical: verticalScale(10),
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 160,
  },
  welcomeText: {
    textAlign: "center",
    color: Theme.SECONDARY_FONT_COLOR,
    fontSize: moderateScale(40),
    fontWeight: 800,
    // paddingBottom: verticalScale(20),
    fontFamily: "Rubik",
  },
  descriptionText: {
    textAlign: "center",
    color: Theme.TERTIARY_FONT_COLOR,
    fontSize: moderateScale(16),
    fontWeight: 400,
  },
  btnContainer: {
    position: "absolute",
    bottom: verticalScale(10),
    left: 0,
    right: 0,
    paddingHorizontal: scale(30),
    gap: verticalScale(5),
  },
});
