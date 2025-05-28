import React, { JSX, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../data/interface";
import AppLayout from "../../../layout";
import { ProfilHeader } from "../../../components/ProfilHeader";
import Photo from "../../../../resources/assets/images/doctor_man.png";
import { useTranslation } from "react-i18next";
import { SceneMap, TabView } from "react-native-tab-view";
import { navigationRef } from "../../../../routers/NavigationService";
import useUserStore from "../../../../services/redux/userStore";
import useRequestStore from "../../../../services/redux/requestStore";
import { RequestService } from "../../../../services/application/request.sa";
import { AvailableRequests } from "./AvailableRequests";
import { SubmittedRequests } from "./SubmittedRequests";
import Spacer from "../../../components/Spacer";

type Props = NativeStackScreenProps<RootStackParamList, "DoctorConsultations">;

export const DoctorConsultations = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "available", title: t("Available Requests") },
    { key: "submitted", title: t("Submitted Proposals") },
  ]);
  const { user } = useUserStore();
  const { requests, setRequests, setCurrent } = useRequestStore();
  const { getRequestsByUser } = RequestService();

  useEffect(() => {
    const fechData = async () => {
      let requestResponse = await getRequestsByUser(user!.user_id!);
      if (requestResponse.success) {
        setRequests(requestResponse.requests!);
      }
    };
    fechData();
  }, []);

  const goToDetail = (id: string) => {
    let current = requests.filter((item) => item.id == id)[0];
    setCurrent(current);
    if (navigationRef.isReady()) {
      navigationRef.navigate("RequestDetails");
    }
  };

  const renderScene = SceneMap({
    available: () => AvailableRequests(goToDetail),
    submitted: () =>
      SubmittedRequests(
        goToDetail,
        requests.filter((item) => item.status == "EXPIRED")
      ),
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
        <Text style={styles.title}>{t("Available Requests")}</Text>
        <Text style={styles.description}>
          {t("Review new consultation requests and offer your services.")}
        </Text>
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
