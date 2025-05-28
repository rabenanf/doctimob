import React, { JSX, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../data/interface";
import AppLayout from "../../../layout";
import { useTranslation } from "react-i18next";
import { ProfilHeader } from "../../../components/ProfilHeader";
import Photo from "../../../../resources/assets/images/doctor_man.png";
import { SceneMap, TabView } from "react-native-tab-view";
import useUserStore from "../../../../services/redux/userStore";
import { PastAppointments } from "./PastAppointments";
import { UpcomingAppointments } from "./UpcomingAppointments";
import Spacer from "../../../components/Spacer";

type Props = NativeStackScreenProps<RootStackParamList, "DoctorAppointments">;

export const DoctorAppointments = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation();
  const { user } = useUserStore();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "upcoming", title: t("Upcoming") },
    { key: "past", title: t("Past") },
  ]);

  const renderScene = SceneMap({
    upcoming: () => UpcomingAppointments(),
    past: () => PastAppointments(),
  });

  const renderTabBar = (props: any) => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route: any, i: number) => {
          const isFocused = props.navigationState.index === i;
          return (
            <TouchableOpacity
              key={i}
              style={[
                styles.tabStyle,
                isFocused ? styles.activeTab : styles.inactiveTab,
              ]}
              onPress={() => props.jumpTo(route.key)}
            >
              <Text
                style={isFocused ? styles.activeLabel : styles.inactiveLabel}
              >
                {route.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <AppLayout>
      <ProfilHeader
        photo={Photo}
        name={user?.first_name + " " + user?.last_name}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{t("Appointment.title")}</Text>
        <Text style={styles.description}>{t("Appointment.description")}</Text>
      </View>

      <Spacer />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
      />
    </AppLayout>
  );
};
