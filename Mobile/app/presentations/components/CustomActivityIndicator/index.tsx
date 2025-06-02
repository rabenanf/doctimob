import { ActivityIndicator, Animated, Modal, StyleSheet } from "react-native";

export const CustomActivityIndicator = () => {
  return (
    <Modal transparent={true}>
      <Animated.View style={[styles.indicatorWrapper, { opacity: 10 }]}>
        <ActivityIndicator size={80} color="#57CFC8" />
      </Animated.View>
    </Modal>
  );
};

export const styles = StyleSheet.create({
  indicatorWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(100, 100, 100, 0.6)",
  },
});
