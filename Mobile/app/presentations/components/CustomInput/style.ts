import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "gray",
    marginTop: 2,
  },
  label: {
    color: "gray",
    marginStart: 10,
  },
  searchInput: {
    backgroundColor: "white",
    borderRadius: 25,
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  chipInputContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
  },
});

export { styles };
