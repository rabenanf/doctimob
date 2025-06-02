import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: 50,
    // paddingHorizontal: 20,
    paddingVertical: verticalScale(10),
  },
  closeIcon: {
    width: scale(40),
    height: verticalScale(40),
    backgroundColor: "#F7F8FF",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: scale(20),
  },
  headerText: {
    fontSize: 14,
    left: scale(20),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    fontSize: 20,
    color: "#999",
  },
  notificationCard: {
    // backgroundColor: "#F9FAFB",
    borderRadius: 25,
    padding: 16,
    marginBottom: 16,
    // elevation: 2,
    marginHorizontal: scale(20),
    borderColor: "#E5E5F0",
    borderWidth: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    width: scale(30),
    height: verticalScale(30),
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    fontSize: moderateScale(10),
    color: "#1F2937",
  },
  time: {
    fontSize: moderateScale(12),
    color: "#666C92",
  },
  message: {
    fontSize: moderateScale(12),
    color: "#111827",
    lineHeight: 20,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 7,
  },
  divider: {
    marginBottom: verticalScale(20),
  },
});
