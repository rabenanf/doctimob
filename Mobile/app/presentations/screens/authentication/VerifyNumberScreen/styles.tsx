import { StyleSheet } from "react-native";
import { Theme } from "../../../../resources/themes";
import { normalizeFont } from "../../../../services/utils/fontSize";
import { moderateScale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: `${normalizeFont(25)}%`,
    marginTop: `${normalizeFont(20)}%`,
    marginBottom: "10%",
  },
  image: {
    height: "100%",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    // paddingBottom: verticalScale(10),
  },
  welcomeText: {
    textAlign: "center",
    color: Theme.SECONDARY_FONT_COLOR,
    fontSize: normalizeFont(40),
    fontWeight: 800,
    paddingBottom: verticalScale(5),
  },
  descriptionText: {
    textAlign: "center",
    color: Theme.TERTIARY_FONT_COLOR,
    fontSize: moderateScale(16),
    fontWeight: 400,
  },
  formContainer: {
    paddingHorizontal: 30,
    flexDirection: "column",
    paddingEnd: 30,
  },
  form: {
    justifyContent: "flex-start",
  },
  login: {
    paddingTop: 30,
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    // gap: 15,
  },
  txtHaveAccount: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: 400,
  },
  txtLogin: {
    textAlign: "center",
    color: Theme.PRIMARY_COLOR,
    fontSize: 16,
    fontWeight: 700,
  },
  btnContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    paddingHorizontal: 30,
    // backgroundColor: "white",
  },

  phoneInputContainer: {
    alignItems: "center",
    fontSize: moderateScale(12),
  },
  phoneContainer: {
    width: "100%",
    height: verticalScale(65),
    backgroundColor: "#f6f8ff",
    borderRadius: 10,
  },
  textInput: {
    backgroundColor: "transparent",
    color: "red",
  },
});
