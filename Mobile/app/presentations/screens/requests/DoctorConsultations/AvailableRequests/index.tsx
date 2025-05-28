import React from "react";
import { Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";
import { PatientRequest } from "../../../../../data/dto/Request.type";
import moment from "moment";
import { convertToAmPm } from "../../../../../services/utils/dateUtil";
import { DoctorRequestCard } from "../../../../components/RequestCard/DoctorRequestCard";
import { doctorRequests } from "../../../../../data/fakeData";

export const AvailableRequests = (
  goToDetail: (id: string) => void,
  requests: PatientRequest[]
) => {
  const { t } = useTranslation();
  return (
    <ScrollView contentContainerStyle={styles.requestListContainer}>
      {doctorRequests.length == 0 ? (
        <Text style={styles.noResponse}>{t("MyRequestsList.noResponse")}</Text>
      ) : (
        doctorRequests.map((request) => {
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
        })
      )}
    </ScrollView>
  );
};
