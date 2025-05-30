import React, { JSX, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../data/interface";
import { useTranslation } from "react-i18next";
import useUserStore from "../../../../../services/redux/userStore";
import { RequestService } from "../../../../../services/application/request.sa";
import moment from "moment";
import { convertToAmPm } from "../../../../../services/utils/dateUtil";
import useRequestStore from "../../../../../services/redux/requestStore";
import { navigationRef } from "../../../../../routers/NavigationService";
import { DoctorRequestCard } from "../../../../components/RequestCard/DoctorRequestCard";
import { doctorConsultationRequests } from "../../../../../data/fakeData";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const DoctorRequests = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation();
  const { user } = useUserStore();
  const { getRequestsByUser } = RequestService();
  const [requests, setRequests] = useState<any[]>([]);
  const { setCurrent } = useRequestStore();

  useEffect(() => {
    const fechRequest = async () => {
      let requestResponse = await getRequestsByUser(user!.user_id!);
      if (requestResponse.success && requestResponse.requests) {
        setRequests(requestResponse.requests);
      }
    };
    fechRequest();
  }, []);

  const goToDetail = (id: string) => {
    let current = requests.filter((item) => item.id == id)[0];
    setCurrent(current);
    if (navigationRef.isReady()) {
      navigationRef.navigate("RequestDetails");
    }
  };

  return (
    <View style={styles.requestContainer}>
      <View style={styles.headerHome}>
        <View style={styles.sectionTitle}>
          <Text style={styles.txtNew}> {t("Consultation")} </Text>
          <Text style={styles.txtTitle}> {t("Home.requests")} </Text>
        </View>
        <TouchableOpacity style={styles.headerViewAll}>
          <Text style={styles.txtViewAll}> {t("Home.viewAll")} </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.requestContentContainerStyle}>
        {doctorConsultationRequests.map((request) => {
          return (
            <DoctorRequestCard
              title={request.description!}
              avatar={request.profile}
              name={request.name}
              natinality={request.natinality}
              date={moment(request.preferred_date!).format("DD MMMM YYYY")}
              time={convertToAmPm(request.preferred_time!)}
              nbSeen={0}
              nbResponded={0}
              key={request.id}
              type={
                request.consultation_type === "OFFLINE"
                  ? t("NewRequest.homeVisit")
                  : t("Video Consultation")
              }
              goToDetail={() => goToDetail(request.id!)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
