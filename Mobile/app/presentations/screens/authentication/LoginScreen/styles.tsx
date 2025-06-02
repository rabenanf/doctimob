import { StyleSheet } from "react-native";
import { Theme } from "../../../../resources/themes";
import { normalizeFont } from "../../../../services/utils/fontSize";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    // height:  `${normalizeFont(30)}%`,
    // marginTop: `${normalizeFont(20)}%`,
    marginTop: verticalScale(20),
    height: verticalScale(223),
  },
  image: {
    height: "100%",
    maxHeight: normalizeFont(223),
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: moderateScale(5),
    paddingVertical: verticalScale(10),
  },
  welcomeText: {
    textAlign: "center",
    color: Theme.SECONDARY_FONT_COLOR,
    fontSize: normalizeFont(40),
    fontWeight: 800,
  },
  descriptionText: {
    textAlign: "center",
    color: Theme.TERTIARY_FONT_COLOR,
    fontSize: moderateScale(16),
    fontWeight: 400,
  },
  formContainer: {
    paddingHorizontal: scale(30),
    flexDirection: "column",
  },
  forgotStyle: {
    textAlign: "right",
    color: Theme.PRIMARY_COLOR,
    fontSize: moderateScale(12),
    fontWeight: 700,
  },
  remeberStyle: {
    color: "#152C2A",
    fontSize: moderateScale(12),
    fontWeight: 400,
  },
  form: {
    flex: 1,
    justifyContent: "flex-start",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    paddingHorizontal: scale(30),
  },
});
