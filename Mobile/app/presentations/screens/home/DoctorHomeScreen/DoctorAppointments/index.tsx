import React, { JSX, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../data/interface";
import { useTranslation } from "react-i18next";
import useUserStore from "../../../../../services/redux/userStore";
import { AppointmentService } from "../../../../../services/application/appointment.sa";
import { UserService } from "../../../../../services/application/user.sa";
import moment from "moment";
import { convertToAmPm } from "../../../../../services/utils/dateUtil";
import { doctorAppointments } from "../../../../../data/fakeData";
import { DoctorAppointmentPhotoCard } from "../../../../components/AppointmentPhotoCard/DoctorAppointmentPhotoCard";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const DoctorAppointments = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation();
  const { user } = useUserStore();
  const { getAppointmentsByUser } = AppointmentService();
  const [appointments, setAppointments] = useState<any[]>([]);
  const { getUserProfileByUserid } = UserService();

  useEffect(() => {
    const fechAppointment = async () => {
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
    fechAppointment();
  }, []);

  return (
    <View style={styles.appointmentContainer}>
      <View style={styles.headerHome}>
        <View style={styles.sectionTitle}>
          <Text style={styles.txtNew}> {t("Upcoming")} </Text>
          <Text style={styles.txtTitle}> {t("Appointments")}</Text>
        </View>
        <TouchableOpacity style={styles.headerViewAll}>
          <Text style={styles.txtViewAll}> {t("Home.viewAll")} </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {doctorAppointments.map((appointment, i) => {
          return (
            <DoctorAppointmentPhotoCard
              key={appointment.id}
              name={appointment.name}
              date={moment(appointment.preferred_date).format("DD MMMM YYYY")}
              time={
                appointment.preferred_time
                  ? convertToAmPm(appointment.preferred_time)
                  : ""
              }
              image={appointment.profile}
              type={appointment.type}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
