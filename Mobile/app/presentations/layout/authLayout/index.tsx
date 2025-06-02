import React, { ReactElement } from "react";
import { Image, ScrollView, View } from "react-native";
import AppLayout from "..";
import { Theme } from "../../../resources/themes";
import { styles } from "./styles";
import LinearGradient from "react-native-linear-gradient";
import Logo from "../../../resources/assets/images/logo.png";

type ILayout = {
  children: ReactElement[] | ReactElement;
  navigation?: any;
  isFullScreen?: boolean;
  footer?: any;
};

const AuthLayout = ({ children, isFullScreen, footer }: ILayout) => {
  return (
    <AppLayout isFullScreen={isFullScreen}>
      <LinearGradient
        style={styles.container}
        colors={[Theme.BACKGROUND_COLOR, "white"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0, 0.4]}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} resizeMode="contain" source={Logo} />
          </View>
          <View>{children}</View>
        </ScrollView>

        {footer && footer}
      </LinearGradient>
    </AppLayout>
  );
};

export default AuthLayout;
