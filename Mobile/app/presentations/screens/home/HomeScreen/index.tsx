import React, { JSX, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../data/interface";
import AppLayout from "../../../layout";
import { ProfilHeader } from "../../../components/ProfilHeader";
import Photo from "../../../../resources/assets/images/photo.png";
import Doctor from "../../../../resources/assets/images/doctor.png";
import { useTranslation } from "react-i18next";
import { AppointmemtPhotoCard } from "../../../components/AppointmentPhotoCard";
import { RequestCard } from "../../../components/RequestCard";
import useUserStore from "../../../../services/redux/userStore";
import { RequestService } from "../../../../services/application/request.sa";
import { AppointmentService } from "../../../../services/application/appointment.sa";
import { UserService } from "../../../../services/application/user.sa";
import moment from "moment";
import { convertToAmPm } from "../../../../services/utils/dateUtil";
import useRequestStore from "../../../../services/redux/requestStore";
import { navigationRef } from "../../../../routers/NavigationService";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation();
  const { user } = useUserStore();
  const { getRequestsByUser } = RequestService();
  const { getAppointmentsByUser } = AppointmentService();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [requests, setRequests] = useState<any[]>([]);
  const { getUserProfileByUserid } = UserService();
  const { setCurrent } = useRequestStore();

  useEffect(() => {
    const fechData = async () => {
      let requestResponse = await getRequestsByUser(user!.user_id!);
      if (requestResponse.success && requestResponse.requests) {
        let activeRequests = requestResponse.requests.filter(
          (item) => item.status == "ACTIVE"
        );
        setRequests(activeRequests);
      }
    };
    fechData();
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

  const goToDetail = (id: string) => {
    let current = requests.filter((item) => item.id == id)[0];
    setCurrent(current);
    if (navigationRef.isReady()) {
      navigationRef.navigate("RequestDetails");
    }
  };

  return (
    <AppLayout isFullScreen statusBarColor="transparent">
      <ProfilHeader
        photo={Photo}
        name={user?.first_name + " " + user?.last_name}
      />

      <ScrollView style={styles.homeContainer}>
        <View style={styles.appointmentContainer}>
          <View style={styles.headerHome}>
            <View style={styles.sectionTitle}>
              <Text style={styles.txtNew}>{t("Home.next")}</Text>
            </View>

            <View style={styles.rowContent}>
              <Text style={styles.txtTitle}>{t("Home.appointments")}</Text>

              <TouchableOpacity
                style={styles.headerViewAll}
                onPress={() => navigation.navigate("AppointmentsList")}
              >
                <Text style={styles.txtViewAll}>{t("Home.viewAll")}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            {appointments.map((appointment) => {
              return (
                <AppointmemtPhotoCard
                  key={appointment.id}
                  name={
                    appointment.doctor?.first_name +
                    " " +
                    appointment.doctor?.last_name
                  }
                  specialty={appointment.doctor?.speciality_doctor_id?.name}
                  date={moment(appointment.request_id?.preferred_date).format(
                    "DD MMMM YYYY"
                  )}
                  time={
                    appointment.request_id?.preferred_time
                      ? convertToAmPm(appointment.request_id?.preferred_time!)
                      : ""
                  }
                  image={Doctor}
                  type={appointment.request_id?.consultation_type!.code}
                />
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.requestContainer}>
          <View style={styles.headerHome}>
            <View style={styles.sectionTitle}>
              <Text style={styles.txtNew}>{t("Home.my")}</Text>
            </View>

            <View style={styles.rowContent}>
              <Text style={styles.txtTitle}>{t("Home.requests")}</Text>

              <TouchableOpacity
                style={styles.headerViewAll}
                onPress={() => navigation.navigate("MyRequestsList")}
              >
                <Text style={styles.txtViewAll}>{t("Home.viewAll")}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView contentContainerStyle={styles.requestListContainer}>
            {requests.map((request) => {
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
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </AppLayout>
  );
};
