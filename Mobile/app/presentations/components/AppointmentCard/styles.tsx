import { StyleSheet } from "react-native";
import { Theme } from "../../../resources/themes";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderColor: "rgba(229, 231, 243, 1)",
    borderWidth: 1,
    columnGap: 15,
  },
  avatar: {
    width: scale(60),
    height: verticalScale(65),
    borderRadius: 12,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    color: "rgba(21, 44, 42, 1)",
    fontSize: moderateScale(12),
    fontWeight: 700,
  },
  badge: {
    backgroundColor: "rgba(229, 231, 243, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
    paddingVertical: 5,
    borderRadius: 5,
  },
  badgeText: {
    color: "rgba(21, 44, 42, 1)",
    fontSize: moderateScale(10),
    fontWeight: 400,
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(8),
    columnGap: scale(5),
  },
  icon: {
    marginRight: 6,
    fontSize: moderateScale(16),
  },
  date: {
    fontSize: moderateScale(14),
    color: "#333",
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  time: {
    fontSize: moderateScale(16),
    fontWeight: 700,
    color: "#333",
  },
  timeBadge: {
    backgroundColor: "#c7e5e5",
    marginLeft: 6,
    paddingHorizontal: 6,
    borderRadius: 6,
  },
  timeBadgeText: {
    fontSize: moderateScale(10),
    color: "#fff",
  },
  rightSide: {
    alignItems: "center",
    flexDirection: "row",
    columnGap: moderateScale(10),
  },
  alertBadge: {
    backgroundColor: "rgba(255, 78, 0, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
    padding: 5,
    borderRadius: 3,
    alignSelf: "flex-end",
  },
  alertText: {
    color: "rgba(255, 78, 0, 1)",
    fontSize: 10,
    fontWeight: 700,
  },
  typeIcon: {
    marginTop: 6,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: scale(10),
  },
  pillText: {
    color: "rgba(21, 44, 42, 1)",
    fontSize: 12,
    fontWeight: 400,
  },
  highlightText: {
    backgroundColor: Theme.PRIMARY_COLOR,
    fontSize: moderateScale(12),
    fontWeight: 400,
    padding: 3,
    borderRadius: 2,
  },
  miniTime: {
    fontSize: moderateScale(10),
    paddingHorizontal: moderateScale(5),
    borderRadius: 3,
    backgroundColor: Theme.PRIMARY_COLOR,
    color: "white",
  },
});
