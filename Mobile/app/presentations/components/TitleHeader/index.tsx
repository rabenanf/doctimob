import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import GoBackIcon from "../../../resources/assets/icons/GoBackIcon.svg";
import { styles } from "./styles";

export const TitleHeader = (Props: any) => {
  const { title, back } = Props;

  return (
    <View style={styles.titleContainer}>
      <TouchableOpacity style={styles.arrowContainer} onPress={back}>
        <GoBackIcon />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.notification} />
    </View>
  );
};
