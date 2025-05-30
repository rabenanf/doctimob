import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, Image, TouchableOpacity } from "react-native";
import nobody from "../../../resources/assets/images/nobody.svg";
import BellIcon from "../../../resources/assets/icons/Notification.svg";
import { styles } from "./styles";
import { BlurView } from "@react-native-community/blur";

export const ProfilHeader = (Props: any) => {
  const { t } = useTranslation();
  const { photo, name, navigation } = Props;
  const handlePressNotification = () => {
    navigation.navigate("Notifications");
  };
  return (
    // <View style={styles.profilContainer}>
    <BlurView
      style={styles.profilContainer}
      blurType="light"
      blurAmount={10}
      reducedTransparencyFallbackColor="white"
    >
      <Image
        style={styles.image}
        source={photo ? photo : nobody}
        resizeMode={"cover"}
      />

      <View style={styles.textContainer}>
        <Text style={styles.welcomeback}>{t("Header.welcome")}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>

      <TouchableOpacity
        onPress={handlePressNotification}
        style={styles.notificationContainer}
      >
        <BellIcon width={24} height={24} />
        <View style={styles.badge} />
      </TouchableOpacity>
    </BlurView>
  );
};
