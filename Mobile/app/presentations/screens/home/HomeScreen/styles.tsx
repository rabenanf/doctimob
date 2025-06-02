import { StyleSheet } from "react-native";
import { Theme } from "../../../../resources/themes";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  homeContainer: {
    // flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
  },
  appointmentContainer: {
    // height: "50%",
  },
  requestContainer: {
    flex: 1,
  },
  headerHome: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(20),
  },
  sectionTitle: {
    flexDirection: "column",
  },
  txtNew: {
    textAlign: "left",
    fontSize: moderateScale(10),
    fontWeight: 400,
  },
  txtTitle: {
    textAlign: "left",
    fontSize: moderateScale(20),
    fontWeight: 700,
  },
  headerViewAll: {
    alignSelf: "center",
  },
  txtViewAll: {
    textAlign: "left",
    color: Theme.PRIMARY_COLOR,
    fontSize: moderateScale(12),
    fontWeight: 700,
  },
  scrollContainer: {
    paddingHorizontal: scale(16),
    gap: moderateScale(6),
  },
  requestListContainer: {
    paddingHorizontal: scale(10),
    paddingBottom: verticalScale(80),
  },
});
