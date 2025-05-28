import React from "react";
import { Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";
import { RequestCard } from "../../../../components/RequestCard";
import { PatientRequest } from "../../../../../data/dto/Request.type";
import moment from "moment";
import { convertToAmPm } from "../../../../../services/utils/dateUtil";

export const SubmittedRequests = (
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
