import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
  closeButton: {
    fontSize: 20,
    color: "#999",
  },
  notificationCard: {
    backgroundColor: "#F9FAFB",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    width: 36,
    height: 36,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
    color: "#1F2937",
  },
  time: {
    fontSize: 12,
    color: "#6B7280",
  },
  message: {
    fontSize: 14,
    color: "#111827",
    lineHeight: 20,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});
