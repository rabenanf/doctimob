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
};

const AppLayout = ({
    children,
    isFullScreen = false
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
            {isFullScreen ? <StatusBar hidden={true} translucent backgroundColor={Theme.BACKGROUND_COLOR} /> : <StatusBar hidden={false} translucent backgroundColor="transparent" barStyle="dark-content" />}
            <View
                style={[
                    {
                        flex: 1,
                        backgroundColor: "white",
                        paddingBottom: 0
                    },
                ]}
            >
                {children}
            </View>
        </SafeAreaView>
        /*<View
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
        </View>*/
    );
};

export default AppLayout;
