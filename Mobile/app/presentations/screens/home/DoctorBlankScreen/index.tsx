import React, { JSX } from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../data/interface";
import AppLayout from "../../../layout";
import { ProfilHeader } from "../../../components/ProfilHeader";
import Photo from "../../../../resources/assets/images/doctor_man.png";
import Frame from "../../../../resources/assets/images/Frame.svg";
import { useTranslation } from "react-i18next";
import useUserStore from "../../../../services/redux/userStore";
import { RoundedButton } from "../../../components/RoundedButton";
import Spacer from "../../../components/Spacer";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const DoctorBlankScreen = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation();
  const { user } = useUserStore();

  return (
    <AppLayout>
      <ProfilHeader
        photo={Photo}
        name={user?.first_name + " " + user?.last_name}
      />
      <View style={styles.homevideContainer}>
        <View style={styles.imageFrame}>
          <Frame height="100%" />
        </View>

        <ScrollView>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcome}>{t("BlankHome.title")}</Text>
            <Text style={styles.name}>
              {user?.first_name + " " + user?.last_name}
            </Text>

            <Text style={styles.description}>
              {t("Your account is now active on")}{" "}
              <Text style={styles.doctimob}> {t("Doctimob")}</Text>.
            </Text>

            <Spacer />

            <Text style={styles.description}>
              {t(
                "Please complete your professional information and availability by clicking the button below."
              )}
            </Text>

            <Spacer />
          </View>

          <RoundedButton
            isPrimary={true}
            onButtonPress={() => {}}
            textBtn={t("Complete My Profile")}
          />
        </ScrollView>
      </View>
    </AppLayout>
  );
};
