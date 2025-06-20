import { StyleSheet } from "react-native";
import { Theme } from "../../../resources/themes";
import { moderateScale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  requestContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    borderColor: "#E5E5F0",
    borderWidth: 1,
    margin: 10,
    gap: 8,
  },
  iconCircle: {
    // backgroundColor: Theme.PRIMARY_COLOR,
    // padding: 10,
    // height: 35,
    // width: 35,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: "rgba(255, 255, 255, 1)",
    // borderRadius: 10,
  },
  requestHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  requestDetail: {
    flexDirection: "column",
    marginVertical: verticalScale(5),
  },
  requestInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  requestType: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconSeen: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    gap: 4,
    backgroundColor: "#6C669F",
  },
  iconResponded: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    gap: 4,
    backgroundColor: "#E9C95A",
  },
  requestSeen: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  requestResponded: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  requestTitle: {
    fontWeight: 700,
    fontSize: moderateScale(12),
    color: "#1D2B2E",
  },
  requestDescription: {
    fontSize: 12,
    color: "#1D2B2E",
  },
  requestDate: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F6FA",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  requestTime: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F6FA",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  requestGo: {
    alignItems: "center",
  },
  typeText: {
    fontSize: moderateScale(10),
    color: "#222",
  },
  statText: {
    fontSize: moderateScale(12),
    color: "#222",
    fontWeight: 700,
  },
});
