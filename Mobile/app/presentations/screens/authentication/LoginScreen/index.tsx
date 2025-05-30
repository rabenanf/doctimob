import React, { JSX, useCallback, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, BackHandler } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useTranslation } from "react-i18next";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CheckBox } from "@rneui/themed";
import { styles } from "./styles";
import { RootStackParamList } from "../../../../data/interface";
import AppLayout from "../../../layout";
import Logo from "../../../../resources/assets/images/logo.png";
import { RoundedButton } from "../../../components/RoundedButton";
import { InputWithIcon } from "../../../components/InputWithIcon";
import { PasswordWithIcon } from "../../../components/PasswordWithIcon";
import { Theme } from "../../../../resources/themes";
import { AuthenticationService } from "../../../../services/application/authentication.sa";
import { Validator } from "../../../../services/utils/validator";
import { UserService } from "../../../../services/application/user.sa";
import useUserStore from "../../../../services/redux/userStore";
import { User } from "../../../../data/dto/User.type";
import { CustomActivityIndicator } from "../../../components/CustomActivityIndicator";
import { RequestService } from "../../../../services/application/request.sa";
import useRequestStore from "../../../../services/redux/requestStore";
import { useFocusEffect } from "@react-navigation/native";

/******  Patient *******/
// fitiapatient@yopmail.com | NMbibite.12
// test@test.com | azerty

/******  Soignant ******/
// doctor-dermatology@yopmail.com | doctimob.doctor!!142
// doctor-generalist@yopmail.com | doctimob.doctor!!142
// doctor-cardiology@yopmail.com | doctimob.doctor!!142

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export const LoginScreen = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);

  const [email, setEmail] = useState("doctor-dermatology@yopmail.com");
  const [password, setPassword] = useState("doctimob.doctor!!142");
  const [loading, setLoading] = useState(false);
  const { login } = AuthenticationService();
  const { getUserProfile } = UserService();
  const { getRequestsByUser } = RequestService();
  const { isValidEmail } = Validator();
  const { user, updateUser } = useUserStore();
  const { setRequests } = useRequestStore();

  const form = {
    password: password,
    email: email,
  };

  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const newErrors: Partial<typeof form> = {};
    if (!isValidEmail(email)) newErrors.email = t("Login.errorEmail");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  useEffect(() => {
    if (errors["email"]) setErrors({ ...errors, ["email"]: undefined });
  }, [email]);

  useEffect(() => {
    if (errors["password"]) setErrors({ ...errors, ["password"]: undefined });
  }, [password]);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        // Aller à l'écran Welcome
        navigation.replace("Welcome");
        return true; // Empêche le comportement par défaut (quitter l'app)
      };

      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => {
        subscription.remove();
      };
    }, [navigation])
  );

  console.log({ loading });

  const checkLogin = async () => {
    setLoading(true);
    if (validate()) {
      console.log("Aiza");
      let response = await login(email, password);
      if (!response.success) {
        let newErrors: Partial<typeof form> = {};
        newErrors.password = t("Login.errorPassword");
        setErrors(newErrors);
        console.log("mandalo 1");
        setLoading(false);
      } else {
        let userResponse = await getUserProfile(email);
        console.log("mandalo 2");
        if (userResponse.success) {
          if (userResponse.user) {
            updateUser(userResponse.user![0] as Partial<User>);
            let requestResponse = await getRequestsByUser(user!.user_id!);
            console.log("mandalo 3");
            if (requestResponse.success) {
              setRequests(requestResponse.requests!);
              console.log("mandalo 4");
              setLoading(false);
            }
          }
          console.log("mandalo 5");
          setLoading(false);
          navigation.navigate("TabHome");
        } else {
          let newErrors: Partial<typeof form> = {};
          newErrors.password = t("Login.errorPassword");
          setErrors(newErrors);
        }
      }
    }
    console.log("mandalo 6");
    setLoading(false);
  };

  return (
    <AppLayout>
      <LinearGradient
        style={styles.container}
        colors={[Theme.BACKGROUND_COLOR, "white"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0, 0.4]}
      >
        <View style={{ flex: 1 }}>
          <KeyboardAwareScrollView
            style={styles.formContainer}
            contentContainerStyle={{ flexGrow: 1 }}
            enableOnAndroid={true}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.imageContainer}>
              <Image style={styles.image} resizeMode="contain" source={Logo} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.welcomeText}> {t("Login.title")} </Text>
              <Text style={styles.descriptionText}>
                {" "}
                {t("Login.description")}{" "}
              </Text>
            </View>
            <View style={styles.form}>
              <InputWithIcon
                placeholder={t("Login.email")}
                iconName="mail"
                iconLibrary="Ionicons"
                value={email}
                onChangeText={setEmail}
                error={errors.email}
              />
              <PasswordWithIcon
                iconName="bag"
                placeholder={t("Login.password")}
                value={password}
                onChangeText={setPassword}
                error={errors.password}
              />
              <View style={styles.footer}>
                <CheckBox
                  checked={checked}
                  onPress={() => setChecked(!checked)}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  checkedColor="black"
                  title={t("Login.rememberMe")}
                  textStyle={styles.remeberStyle}
                  fontFamily="Rubik"
                  containerStyle={{ margin: 0, padding: 0, marginLeft: 0 }}
                />
                <TouchableOpacity onPress={() => goToForgotPassword()}>
                  <Text style={styles.forgotStyle}>
                    {t("Login.forgotPassword")}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
        <View style={styles.btnContainer}>
          <RoundedButton
            isPrimary={true}
            onButtonPress={checkLogin}
            textBtn={t("Login.login")}
          />
        </View>
        {loading && <CustomActivityIndicator />}
      </LinearGradient>
    </AppLayout>
  );
};
