import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 16,
      alignItems: 'flex-start',
      marginTop: 10
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 12,
    },
    content: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 4,
    },
    name: {
      fontWeight: 700,
      fontSize: 14,
      color: '#222',
    },
    date: {
      fontSize: 12,
      color: '#888',
    },
    stars: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    comment: {
      fontSize: 14,
      color: '#333',
      lineHeight: 20,
    },
  });
  