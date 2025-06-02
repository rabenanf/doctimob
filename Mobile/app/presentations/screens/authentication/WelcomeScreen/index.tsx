import React, { JSX, useCallback } from "react";
import { View, Text, Image, BackHandler } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useTranslation } from "react-i18next";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../data/interface";
import AppLayout from "../../../layout";
import Logo from "../../../../resources/assets/images/logo.png";
import { RoundedButton } from "../../../components/RoundedButton";
import { Theme } from "../../../../resources/themes";
import { useFocusEffect } from "@react-navigation/native";
import Spacer from "../../../components/Spacer";

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

export const WelcomeScreen = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation();

  const goToChooseAccountType = () => {
    navigation.navigate("ChooseAccountType");
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        // Ne fait rien → empêche le retour
        return true;
      };

      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => subscription.remove();
    }, [])
  );

  return (
    <AppLayout isFullScreen={true} statusBarColor="transparent">
      <LinearGradient
        style={styles.container}
        colors={[Theme.BACKGROUND_COLOR, "white"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0, 0.4]}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} resizeMode="contain" source={Logo} />
        </View>

        <Spacer />

        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>{t("Welcome.title")}</Text>
          <Text style={styles.descriptionText}>{t("Welcome.description")}</Text>
        </View>

        <Spacer height={80} />

        <View style={styles.btnContainer}>
          <RoundedButton
            isPrimary={true}
            onButtonPress={() => goToChooseAccountType()}
            textBtn={t("Welcome.getStarted")}
          />
          <RoundedButton
            isPrimary={false}
            onButtonPress={() => goToLogin()}
            textBtn={t("Welcome.login")}
          />
        </View>
      </LinearGradient>
    </AppLayout>
  );
};
