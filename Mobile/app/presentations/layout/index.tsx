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
  statusBarStyleLight?: boolean;
  navigation?: any;
  isFullScreen?: boolean;
  backgroundColor?: string;
  appBackgroundColor?: string;
};

const AppLayout = ({
  children,
  statusBarStyleLight = false,
  isFullScreen = false,
  backgroundColor = "rgba(255, 255, 255, 0.0)",
  appBackgroundColor = "white",
}: ILayout) => {
  // const [height, setHeight] = useState(0);
  const insets = useSafeAreaInsets();
  const statusBarHeight =
    Platform.OS === "ios"
      ? 0
      : StatusBar.currentHeight != undefined
      ? StatusBar.currentHeight
      : 32;
  return (
    // <SafeAreaView style={styles.Container}>
    //   <View
    //     style={[
    //       {
    //         flex: 1,
    //         backgroundColor: "white",
    //         paddingBottom: 0,
    //       },
    //     ]}
    //   >
    //     {children}
    //   </View>
    // </SafeAreaView>
    <View
      style={{
        flex: 1,
        paddingTop: 0,
      }}
    >
      <StatusBar translucent backgroundColor="transparent" />
      <View
        style={[
          {
            flex: 1,
            paddingBottom: 0,
            backgroundColor: "white",
          },
        ]}
      >
        {children}
      </View>
    </View>
  );
};

export default AppLayout;
