import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import DownArrowIcon from "../../../../resources/assets/icons/DownArrow.svg";

type CustomPhoneInputProps = {
  selectedCountry: string;
  phoneNumber: string;
  setSelectedCountry: Dispatch<SetStateAction<string>>;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
};

export default function CustomPhoneInput({
  selectedCountry,
  phoneNumber,
  setSelectedCountry,
  setPhoneNumber,
}: CustomPhoneInputProps) {
  const [countryCode, setCountryCode] = useState("VN");
  const [callingCode, setCallingCode] = useState("84");
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={styles.flagWrapper}
        >
          <CountryPicker
            withCallingCode
            withFlag
            withFilter
            // withEmoji
            countryCode={countryCode}
            onSelect={(country) => {
              setCountryCode(country.cca2);
              setCallingCode(country.callingCode[0]);
              setSelectedCountry("+" + country.callingCode[0]);
            }}
            visible={visible}
            onClose={() => setVisible(false)}
          />
          <DownArrowIcon style={{ marginRight: verticalScale(10) }} />
          <Text style={styles.callingCode}>+{callingCode}</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.phoneInput}
          placeholder="Phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 100,
    alignItems: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f6f8ff",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    width: "100%",
    borderColor: "#E5E7F3",
    borderWidth: 1,
  },
  flagWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  callingCode: {
    fontSize: moderateScale(14),
    marginLeft: scale(5),
    fontWeight: "bold",
  },
  phoneInput: {
    // flex: 1,
    fontSize: moderateScale(14),
  },
});
