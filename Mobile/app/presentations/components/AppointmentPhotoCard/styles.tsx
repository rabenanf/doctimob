import { StyleSheet } from "react-native";
import { Theme } from "../../../resources/themes";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 4,
    borderColor: "rgba(229, 231, 243, 1)",
    width: scale(256),
    height: verticalScale(350),
    marginVertical: verticalScale(5),
  },
  videoContainer: {
    margin: moderateScale(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    // width: "100%",
    height: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
    // padding: moderateScale(20),
  },
  videoButton: {
    // position: "absolute",
    // top: 16,
    // right: 16,
    backgroundColor: Theme.PRIMARY_COLOR,
    padding: moderateScale(10),
    height: verticalScale(35),
    width: scale(35),
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 1)",
    borderRadius: 80,
  },
  infoContainer: {
    // width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: moderateScale(10),
    borderRadius: 10,
    margin: moderateScale(20),
    // marginTop: -83,
    // flexDirection: "column",
    //alignItems: "center",
    // alignSelf: "flex-end",
  },
  headerRow: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 12,
  },
  name: {
    fontSize: moderateScale(12),
    fontWeight: 700,
    color: "#333",
  },
  specialtyTag: {
    backgroundColor: "#F0D264",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  specialtyText: {
    fontSize: moderateScale(10),
    color: "#fff",
    fontWeight: "600",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(6),
    borderRadius: 10,
    gap: moderateScale(6),
  },
  detailText: {
    fontSize: moderateScale(10),
    color: "#333",
  },
});
