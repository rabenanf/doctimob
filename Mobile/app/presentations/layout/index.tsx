import React, { ReactElement } from "react";
import { Platform, StatusBar, View } from "react-native";
import styles from "./styles";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";
import { Theme } from "../../resources/themes";

enableScreens();

type ILayout = {
  children: ReactElement[] | ReactElement;
  navigation?: any;
  isFullScreen?: boolean;
  statusBarColor?: string;
};

const AppLayout = ({
  children,
  isFullScreen = false,
  statusBarColor,
}: ILayout) => {
  const insets = useSafeAreaInsets();
  const statusBarHeight =
    Platform.OS === "ios"
      ? 0
      : StatusBar.currentHeight != undefined
      ? StatusBar.currentHeight
      : 32;
  return (
    <SafeAreaView style={styles.Container}>
      {isFullScreen ? (
        <StatusBar
          translucent
          hidden={false}
          backgroundColor={statusBarColor ?? Theme.BACKGROUND_COLOR}
          barStyle="light-content"
        /> 
      ) : (
        <StatusBar
          hidden={false}
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      )}
      <View
        style={[
          {
            flex: 1,
            backgroundColor: "white",
            paddingBottom: 0,
          },
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

export default AppLayout;
