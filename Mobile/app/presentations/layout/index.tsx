import React, { ReactElement } from "react";
import { Platform, StatusBar, View } from "react-native";
import styles from "./styles";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";

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
          backgroundColor={statusBarColor ?? "#57CFC8"}
          barStyle="dark-content"
        /> // #57CFC8
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
            paddingBottom: insets.bottom,
          },
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

export default AppLayout;
