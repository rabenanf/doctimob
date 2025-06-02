import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { Theme } from "../../../resources/themes";
import SwitchOffIcon from "../../../resources/assets/icons/SwitchOffIcon.svg";
import SwitchOnIcon from "../../../resources/assets/icons/SwitchOnIcon.svg";

interface CustomToogleType {
  label: any;
  handleEnabled: (value: boolean) => void;
  defaultState: boolean;
  canBeToogle?: boolean;
}
const CustomToggle = ({
  label,
  handleEnabled,
  defaultState,
  canBeToogle = true,
}: CustomToogleType) => {
  const [isEnabled, setIsEnabled] = useState(defaultState);
  const { t } = useTranslation();
  const onToogle = () => {
    setIsEnabled(!isEnabled);
    handleEnabled(!isEnabled);
  };

  useEffect(() => {
    setIsEnabled(defaultState);
  }, [defaultState]);
  const cannotToogle = () => {
    //showToast(t('Toast.noInternet'), 'info');
    //Toast.show(t('Toast.noInternet'), Toast.LONG);
  };
  return (
    <View style={styles.ViewContainer}>
      <Text style={styles.labelText}>{label}</Text>
      <TouchableOpacity
        // style={
        //   isEnabled
        //     ? styles.toggleContainerEnabled
        //     : styles.toggleContainerDisabled
        // }
        onPress={canBeToogle ? onToogle : cannotToogle}
      >
        {isEnabled ? <SwitchOnIcon /> : <SwitchOffIcon />}
        {/* <View
          style={isEnabled ? styles.circleEnabled : styles.circleDisabled}
        /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  labelText: {
    fontSize: 12,
    fontWeight: 700,
  },
  toggleContainerDisabled: {
    width: 50,
    height: 24,
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    padding: 2,
    marginRight: 10,
    borderWidth: 1,
    borderColor: Theme.PRIMARY_COLOR,
  },
  toggleContainerEnabled: {
    width: 50,
    height: 24,
    borderRadius: 15,
    backgroundColor: Theme.PRIMARY_COLOR,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    padding: 2,
    alignItems: "flex-end",
    marginRight: 10,
  },
  circleDisabled: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Theme.PRIMARY_COLOR,
  },
  circleEnabled: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
});

export default CustomToggle;
