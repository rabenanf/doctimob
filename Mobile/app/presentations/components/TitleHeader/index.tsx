import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BackArrow from "../../../resources/assets/icons/back.svg";
import { useTranslation } from "react-i18next";
import { styles } from "./styles";

export const TitleHeader = (Props: any) => {
  const { title, back } = Props;

  return (
    <View style={styles.titleContainer}>
      <TouchableOpacity style={styles.arrowContainer} onPress={back}>
        <BackArrow style={styles.vectorStroke} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.notification} />
    </View>
  );
};
