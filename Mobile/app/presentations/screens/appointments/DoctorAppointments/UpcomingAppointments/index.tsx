import React, { useEffect, useState } from "react";
import { Text, ScrollView } from "react-native";
import { styles } from "./styles";
import AppointmentCard from "../../../../components/AppointmentCard";
import { useTranslation } from "react-i18next";
import Doctor from "../../../../../resources/assets/images/doctor_man.png";
import moment from "moment";
import { convertToAmPm } from "../../../../../services/utils/dateUtil";
import { UserService } from "../../../../../services/application/user.sa";
import { AppointmentService } from "../../../../../services/application/appointment.sa";
import useUserStore from "../../../../../services/redux/userStore";

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

  const goToDetail = () => {
    /*if (navigationRef.isReady()) {
          navigationRef.navigate('AppointmentDetail');
      } */
  };

  return (
    <ScrollView contentContainerStyle={styles.appointmentListContainer}>
      {appointments.length == 0 ? (
        <Text style={styles.noResponse}> {t("Appointment.noResponse")} </Text>
      ) : (
        appointments.map((appointment) => {
          return (
            <AppointmentCard
              doctorName={
                appointment.doctor?.first_name +
                " " +
                appointment.doctor?.last_name
              }
              specialty={appointment.doctor?.specialty_id?.name}
              date={moment(appointment.request_id?.preferred_date).format(
                "DD MMMM YYYY"
              )}
              time={
                appointment.request_id?.preferred_time
                  ? convertToAmPm(appointment.request_id?.preferred_time!)
                  : ""
              }
              source={Doctor}
              type={appointment.request_id?.consultation_type!.code}
              onPress={goToDetail}
            />
          );
        })
      )}
    </ScrollView>
  );
};
