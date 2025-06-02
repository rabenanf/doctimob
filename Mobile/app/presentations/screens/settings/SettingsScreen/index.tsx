import React, { JSX, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../data/interface";
import AppLayout from "../../../layout";
import { ProfilHeader } from "../../../components/ProfilHeader";
import Photo from "../../../../resources/assets/images/photo.png";
import { useTranslation } from "react-i18next";
import ProfilIcon from "../../../../resources/assets/icons/User.svg";
import LockIcon from "../../../../resources/assets/icons/Lock.svg";
import EarthIcon from "../../../../resources/assets/icons/Earth.svg";
import FamilyIcon from "../../../../resources/assets/icons/Users_Group.svg";
import HistoryIcon from "../../../../resources/assets/icons/History.svg";
import CardIcon from "../../../../resources/assets/icons/CardIcon.svg";
import LogoutIcon from "../../../../resources/assets/icons/Logout.svg";
import AltArrowIcon from "../../../../resources/assets/icons/Alt_Arrow_Down.svg";
import EnglishIcon from "../../../../resources/assets/icons/english.svg";
import VietIcon from "../../../../resources/assets/icons/vietnam.svg";
import { RoundedButton } from "../../../components/RoundedButton";
import { Language } from "../../../../data/enum";
import useUserStore from "../../../../services/redux/userStore";
import { AuthenticationService } from "../../../../services/application/authentication.sa";
import { UserService } from "../../../../services/application/user.sa";
import { LanguageService } from "../../../../services/application/language.sa";
import { showToast } from "../../../../services/utils/toast";

type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

export const SettingsScreen = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [language, setLanguage] = useState(Language.ENGLISH);
  const { user, logout } = useUserStore();
  const { logoutAuth } = AuthenticationService();
  const { updateLanguage } = UserService();
  const { getLanguageIdByCode, getLanguageCodeById } = LanguageService();

  const changeLanguage = async () => {
    let data = await getLanguageIdByCode(
      language == Language.ENGLISH ? "en" : "vn"
    );

    if (data) {
      let response = await updateLanguage(user?.id!, data);
      setModalVisible(false);
      if (!response.success) {
        showToast("error", t("Global.error"), response.message);
      }
    }
  };

  const logoutApp = async () => {
    let response = await logoutAuth();
    if (response.success) {
      logout();
      navigation.navigate("Login");
      return;
    }
    console.log(response.message);
  };

  useEffect(() => {
    const fetchData = async () => {
      var response = await getLanguageCodeById(user?.language_id!);
      if (response) {
        setLanguage(response == "en" ? Language.ENGLISH : Language.VIET);
      }
    };

    fetchData();
  }, []);

  const changeLanguageModal = () => {
    return (
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback>
            <View style={styles.addContainer}>
              <View style={styles.rectangle}></View>
              <View style={styles.addTitleContainer}>
                <Text style={styles.addTitle}> {t("Setting.addTitle")} </Text>
                <Text style={styles.addDescription}>
                  {t("Setting.addDescription")}
                </Text>
              </View>
              <View style={styles.form}>
                <TouchableOpacity
                  style={
                    language == Language.VIET
                      ? styles.methodSelected
                      : styles.method
                  }
                  onPress={() => {
                    setLanguage(Language.VIET);
                  }}
                >
                  <VietIcon />
                  <Text
                    style={
                      language == Language.VIET
                        ? styles.textSelected
                        : styles.text
                    }
                  >
                    {t("Setting.vietnamese")}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    language == Language.ENGLISH
                      ? styles.methodSelected
                      : styles.method
                  }
                  onPress={() => {
                    setLanguage(Language.ENGLISH);
                  }}
                >
                  <EnglishIcon />
                  <Text
                    style={
                      language == Language.ENGLISH
                        ? styles.textSelected
                        : styles.text
                    }
                  >
                    {t("Setting.english")}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.action}>
                <RoundedButton
                  isPrimary={true}
                  onButtonPress={() => {
                    changeLanguage();
                    setModalVisible(false);
                  }}
                  textBtn={t("Setting.save")}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <AppLayout>
      <ProfilHeader
        photo={Photo}
        name={user?.first_name + " " + user?.last_name}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{t("Setting.title")}</Text>
        <Text style={styles.description}>{t("Setting.description")}</Text>
      </View>

      <View style={styles.detailContainer}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate("Profile")}
        >
          <View style={styles.itemIcon}>
            <ProfilIcon />
            <Text style={styles.itemText}> {t("Setting.profile")} </Text>
          </View>
          <View style={styles.itemArrow}>
            <AltArrowIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          <View style={styles.itemIcon}>
            <LockIcon />
            <Text style={styles.itemText}> {t("Setting.changePassword")} </Text>
          </View>
          <View style={styles.itemArrow}>
            <AltArrowIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => setModalVisible(true)}
        >
          <View style={styles.itemIcon}>
            <EarthIcon />
            <Text style={styles.itemText}> {t("Setting.language")} </Text>
          </View>
          <View style={styles.itemArrow}>
            {language == Language.ENGLISH ? <EnglishIcon /> : <VietIcon />}
            <Text>
              {language == Language.ENGLISH ? "English" : "Vietnamese"}{" "}
            </Text>
            <AltArrowIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate("FamilyMember")}
        >
          <View style={styles.itemIcon}>
            <FamilyIcon />
            <Text style={styles.itemText}> {t("Setting.familyMember")} </Text>
          </View>
          <View style={styles.itemArrow}>
            <AltArrowIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate("MedicalRecordList")}
        >
          <View style={styles.itemIcon}>
            <HistoryIcon />
            <Text style={styles.itemText}> {t("Setting.records")} </Text>
          </View>
          <View style={styles.itemArrow}>
            <AltArrowIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate("PaymentMethod")}
        >
          <View style={styles.itemIcon}>
            <CardIcon />
            <Text style={styles.itemText}> {t("Setting.paymentMethods")} </Text>
          </View>
          <View style={styles.itemArrow}>
            <AltArrowIcon />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={logoutApp} style={styles.logoutContainer}>
        <View>
          <LogoutIcon />
        </View>
        <View>
          <Text style={styles.itemText}> {t("Setting.logout")} </Text>
        </View>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        {changeLanguageModal()}
      </Modal>
    </AppLayout>
  );
};
