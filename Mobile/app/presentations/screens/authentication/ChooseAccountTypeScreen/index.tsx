import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../data/interface";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { JSX, useState } from "react";
import { RoundedButton } from "../../../components/RoundedButton";
import useUserStore from "../../../../services/redux/userStore";
import AuthLayout from "../../../layout/authLayout";

type Props = NativeStackScreenProps<RootStackParamList, "ChooseAccountType">;

export const ChooseAccountTypeScreen = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation();
  const { user, setRole } = useUserStore();
  const [isDoctor, setIsDoctor] = useState(false);

  const selectType = (type: string) => {
    setIsDoctor(type == "doctor");
  };

  const goToVerifyNumber = () => {
    if (isDoctor) setRole("doctor");
    else setRole("patient");
    navigation.navigate("VerifyNumber");
  };

  return (
    <AuthLayout
      isFullScreen
      footer={
        <View style={styles.btnContainer}>
          <RoundedButton
            isPrimary={true}
            onButtonPress={() => {
              goToVerifyNumber();
            }}
            textBtn={t("ChooseAccountType.continue")}
          />
        </View>
      }
    >
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>{t("ChooseAccountType.title")}</Text>
        <Text style={styles.descriptionText}>
          {t("ChooseAccountType.description")}
        </Text>
      </View>

      <View style={styles.typeContainer}>
        <TouchableOpacity
          style={!isDoctor ? styles.typeSelected : styles.type}
          onPress={() => selectType("patient")}
        >
          <Text style={styles.item}>{t("ChooseAccountType.patient")}</Text>
          <Text style={styles.itemDesc}>
            {t("ChooseAccountType.patientDesc")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isDoctor ? styles.typeSelected : styles.type}
          onPress={() => selectType("doctor")}
        >
          <Text style={styles.item}> {t("ChooseAccountType.doctor")} </Text>
          <Text style={styles.itemDesc}>
            {t("ChooseAccountType.doctorDesc")}
          </Text>
        </TouchableOpacity>
      </View>
    </AuthLayout>
  );
};
