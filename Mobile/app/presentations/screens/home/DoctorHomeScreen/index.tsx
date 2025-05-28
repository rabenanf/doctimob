import React, { JSX } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../data/interface";
import AppLayout from "../../../layout";
import { ProfilHeader } from "../../../components/ProfilHeader";
import Photo from "../../../../resources/assets/images/doctor_man.png";
import useUserStore from "../../../../services/redux/userStore";
import { DoctorAppointments } from "./DoctorAppointments";
import { DoctorRequests } from "./DoctorRequests";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const DoctorHomeScreen = ({ navigation, route }: Props): JSX.Element => {
  const { user } = useUserStore();

  return (
    <AppLayout>
      <ProfilHeader
        photo={Photo}
        name={user?.first_name + " " + user?.last_name}
      />
      <View style={styles.homeContainer}>
        <DoctorAppointments navigation={navigation} route={route} />

        <DoctorRequests navigation={navigation} route={route} />
      </View>
    </AppLayout>
  );
};
