import React, { JSX, useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../data/interface";
import AppLayout from "../../../../layout";
import { ProfilHeader } from "../../../../components/ProfilHeader";
import Photo from "../../../../../resources/assets/images/photo.png";
import { useTranslation } from "react-i18next";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { RequestCard } from "../../../../components/RequestCard";
import { navigationRef } from "../../../../../routers/NavigationService";
import useUserStore from "../../../../../services/redux/userStore";
import useRequestStore from "../../../../../services/redux/requestStore";
import { RequestService } from "../../../../../services/application/request.sa";
import { PatientRequest } from "../../../../../data/dto/Request.type";
import moment from "moment";
import { convertToAmPm } from "../../../../../services/utils/dateUtil";

const ActiveRoute = (
  goToDetail: (id: string) => void,
  requests: PatientRequest[]
) => {
  const { t } = useTranslation();
  return (
    <ScrollView contentContainerStyle={styles.requestListContainer}>
      {requests.length == 0 ? (
        <Text style={styles.noResponse}>
          {" "}
          {t("MyRequestsList.noResponse")}{" "}
        </Text>
      ) : (
        requests.map((request) => {
          return (
            <RequestCard
              title={request.description!}
              date={moment(request.preferred_date!).format("DD MMMM YYYY")}
              time={convertToAmPm(request.preferred_time!)}
              nbSeen={0}
              nbResponded={0}
              key={request.id}
              type={
                request.consultation_type!.code == "OFFLINE"
                  ? t("NewRequest.homeVisit")
                  : t("NewRequest.online")
              }
              goToDetail={() => goToDetail(request.id!)}
            />
          );
        })
      )}
    </ScrollView>
  );
};

const ExpiredRoute = (
  goToDetail: (id: string) => void,
  requests: PatientRequest[]
) => {
  const { t } = useTranslation();
  return (
    <ScrollView contentContainerStyle={styles.requestListContainer}>
      {requests.length == 0 ? (
        <Text style={styles.noResponse}>
          {" "}
          {t("MyRequestsList.noResponse")}{" "}
        </Text>
      ) : (
        requests.map((request) => {
          return (
            <RequestCard
              title={request.description!}
              date={moment(request.preferred_date!).format("DD MMMM YYYY")}
              time={convertToAmPm(request.preferred_time!)}
              nbSeen={0}
              nbResponded={0}
              key={request.id}
              type={
                request.consultation_type!.code == "OFFLINE"
                  ? t("NewRequest.homeVisit")
                  : t("NewRequest.online")
              }
              goToDetail={() => goToDetail(request.id!)}
            />
          );
        })
      )}
    </ScrollView>
  );
};

const CancelledRoute = (
  goToDetail: (id: string) => void,
  requests: PatientRequest[]
) => {
  const { t } = useTranslation();
  return (
    <ScrollView contentContainerStyle={styles.requestListContainer}>
      {requests.length == 0 ? (
        <Text style={styles.noResponse}>
          {" "}
          {t("MyRequestsList.noResponse")}{" "}
        </Text>
      ) : (
        requests.map((request) => {
          return (
            <RequestCard
              title={request.description!}
              date={moment(request.preferred_date!).format("DD MMMM YYYY")}
              time={convertToAmPm(request.preferred_time!)}
              nbSeen={0}
              nbResponded={0}
              key={request.id}
              type={
                request.consultation_type!.code == "OFFLINE"
                  ? t("NewRequest.homeVisit")
                  : t("NewRequest.online")
              }
              goToDetail={() => goToDetail(request.id!)}
            />
          );
        })
      )}
    </ScrollView>
  );
};

type Props = NativeStackScreenProps<RootStackParamList, "MyRequestsList">;

export const MyRequestsListScreen = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "active", title: t("MyRequestsList.active") },
    { key: "expired", title: t("MyRequestsList.expired") },
    { key: "cancelled", title: t("MyRequestsList.cancelled") },
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
    active: () =>
      ActiveRoute(
        goToDetail,
        requests.filter((item) => item.status == "ACTIVE")
      ),
    expired: () =>
      ExpiredRoute(
        goToDetail,
        requests.filter((item) => item.status == "EXPIRED")
      ),
    cancelled: () =>
      CancelledRoute(
        goToDetail,
        requests.filter((item) => item.status == "CANCELLED")
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
        <Text style={styles.title}>{t("MyRequestsList.title")}</Text>
        <Text style={styles.description}>
          {t("MyRequestsList.description")}
        </Text>
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
      />
    </AppLayout>
  );
};
