import { StyleSheet } from "react-native";
import { Theme } from "../../../../resources/themes";

export const styles = StyleSheet.create({
  homevideContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  imageFrame: {
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
    paddingVertical: 20,
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  welcome: {
    textAlign: "center",
    color: Theme.SECONDARY_FONT_COLOR,
    fontSize: 32,
    fontWeight: 700,
  },
  name: {
    textAlign: "center",
    color: Theme.PRIMARY_COLOR,
    fontSize: 32,
    fontWeight: 700,
    paddingBottom: 10,
  },
  description: {
    textAlign: "center",
    color: Theme.TERTIARY_FONT_COLOR,
    fontSize: 16,
    fontWeight: 400,
    paddingHorizontal: 20,
  },
  createaNewRequest: {
    paddingTop: 30,
    paddingBottom: 10,
  },
  create: {
    textAlign: "center",
    color: Theme.TERTIARY_FONT_COLOR,
    fontSize: 16,
    fontWeight: 800,
  },
  doctimob: {
    textAlign: "center",
    color: Theme.PRIMARY_COLOR,
    fontSize: 16,
    fontWeight: 700,
  },
});
