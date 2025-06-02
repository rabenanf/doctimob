import LinearGradient from "react-native-linear-gradient";
import React, { JSX, useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CountryCodeDropdownPicker from "react-native-dropdown-country-picker";
import { RootStackParamList } from "../../../../data/interface";
import { styles } from "./styles";
import { RoundedButton } from "../../../components/RoundedButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useUserStore from "../../../../services/redux/userStore";
import { AuthenticationService } from "../../../../services/application/authentication.sa";
import { CustomActivityIndicator } from "../../../components/CustomActivityIndicator";
import { showToast } from "../../../../services/utils/toast";
import AuthLayout from "../../../layout/authLayout";
import PhoneInput from "react-native-phone-number-input";
import { moderateScale } from "react-native-size-matters";

type Props = NativeStackScreenProps<RootStackParamList, "VerifyNumber">;

export const VerifyNumberScreen = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState("+33");
  const [country, setCountry] = useState("");
  const [telephone, setTelephone] = useState("");
  const { user, setPhone } = useUserStore();
  const { verifyNumber } = AuthenticationService();
  const [loading, setLoading] = useState(false);

  console.log({ telephone });

  const sendNumber = async () => {
    setPhone(selected + telephone);
    setLoading(true);
    const response = await verifyNumber(selected + telephone);
    console.log("valiny : ", response);
    if (response.success) {
      navigation.navigate("OTPVerification");
    } else {
      showToast("error", t("Global.error"), t("OTP.errorSend"));
    }
    setLoading(false);
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const phoneInput = useRef(null);
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");

  return (
    <AuthLayout
      isFullScreen
      footer={
        <View style={styles.btnContainer}>
          <RoundedButton
            isPrimary={true}
            onButtonPress={() => {
              sendNumber();
            }}
            textBtn={t("VerifyNumber.continue")}
          />
        </View>
      }
    >
      <View>
        {/* <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
        > */}
        <View style={styles.formContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>{t("VerifyNumber.title")} </Text>
            <Text style={styles.descriptionText}>
              {t("VerifyNumber.description")}{" "}
            </Text>
          </View>
          <View style={styles.form}>
            <CountryCodeDropdownPicker
              selected={selected}
              setSelected={setSelected}
              setCountryDetails={setCountry}
              phone={telephone}
              setPhone={setTelephone}
              countryCodeTextStyles={{ fontSize: 13 }}
            />
          </View>
          {/* <View style={styles.phoneInputContainer}>
            <PhoneInput
              ref={phoneInput}
              // defaultValue={value}
              defaultCode="VN" // Vietnam
              layout="second" // Flag and code on the left
              value={telephone}
              onChangeText={(text) => setTelephone(text)}
              onChangeFormattedText={(text) => setFormattedValue(text)}
              containerStyle={styles.phoneContainer}
              textContainerStyle={styles.textInput}
              textInputStyle={{ fontSize: moderateScale(12) }}
              codeTextStyle={{ fontSize: moderateScale(12) }}
              withDarkTheme
              withShadow={false}
              // autoFocus
            />
          </View> */}
        </View>

        <View style={styles.login}>
          <Text style={styles.txtHaveAccount}>
            {t("VerifyNumber.haveAccount")}
          </Text>

          <TouchableOpacity onPress={goToLogin}>
            <Text style={styles.txtLogin}>{t("VerifyNumber.login")}</Text>
          </TouchableOpacity>
        </View>
        {/* </KeyboardAwareScrollView> */}

        {loading && <CustomActivityIndicator />}
      </View>
    </AuthLayout>
  );
};
