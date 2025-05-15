import { ActivityIndicator, Animated, Modal, StyleSheet, View } from "react-native";

export const CustomActivityIndicator = () => {
    return (
        <Modal transparent={true}>
            <Animated.View style={[styles.indicatorWrapper, { opacity: 10 }]}>
                <ActivityIndicator size={80} color="#3498db" />
            </Animated.View>
        </Modal>
    );
}

export const styles = StyleSheet.create({
    indicatorWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(100, 100, 100, 0.6)',
    },
})