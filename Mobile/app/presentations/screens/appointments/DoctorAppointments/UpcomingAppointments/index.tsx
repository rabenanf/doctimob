import React, { useEffect, useState } from "react";
import { Text, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { convertToAmPm } from "../../../../../services/utils/dateUtil";
import { UserService } from "../../../../../services/application/user.sa";
import { AppointmentService } from "../../../../../services/application/appointment.sa";
import useUserStore from "../../../../../services/redux/userStore";
import { DoctorAppointmentCard } from "../../../../components/RequestCard/DoctorAppointmentCard";
import { doctorUpcomingAppointments } from "../../../../../data/fakeData";

export const UpcomingAppointments = () => {
  const { t } = useTranslation();
  const { user } = useUserStore();
  const { getAppointmentsByUser } = AppointmentService();
  const { getUserProfileByUserid } = UserService();
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    const fechData = async () => {
      let response = await getAppointmentsByUser(user?.user_id!);
      if (response.success && response.appointments) {
        let res = response.appointments;

        const updated = await Promise.all(
          res.map(async (item) => {
            let response = await getUserProfileByUserid(item.doctor_id);
            console.log("---", response);
            if (response.success && response.user) {
              return { ...item, doctor: response.user };
            }
            return item;
          })
        );

        setAppointments(updated);
      }
    };
    fechData();
  }, []);

  const goToDetail = () => {};

  return (
    <>
      <FlatList
        data={doctorUpcomingAppointments ?? []}
        contentContainerStyle={styles.appointmentListContainer}
        renderItem={({ item }: { item: any }) => (
          <DoctorAppointmentCard
            title={item.description!}
            avatar={item.profile}
            rdvTime={item.rdv_time}
            name={item.name}
            date={moment(item.preferred_date!).format("DD MMMM YYYY")}
            time={convertToAmPm(item.preferred_time!)}
            nbSeen={0}
            nbResponded={0}
            key={item.id}
            type={
              item.consultation_type === "OFFLINE"
                ? t("NewRequest.homeVisit")
                : t("Video Consultation")
            }
            goToDetail={() => goToDetail()}
          />
        )}
        keyExtractor={(item: any) => item?.id?.toString()}
        ListEmptyComponent={
          <Text style={styles.noResponse}> {t("Appointment.noResponse")} </Text>
        }
      />
    </>
  );
};
