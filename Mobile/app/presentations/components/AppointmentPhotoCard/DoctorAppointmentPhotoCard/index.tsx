import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // pour les icônes (calendar, clock)
import VideoIcon from "../../../../resources/assets/icons/Videocamera.svg"; // ton icône vidéo SVG
import HomeIcon from "../../../../resources/assets/icons/home.svg"; // ton icône vidéo SVG
import { styles } from "./styles";
import MiniClockIcon from "../../../../resources/assets/icons/Min_clock.svg";
import MiniCalendarIcon from "../../../../resources/assets/icons/Mini_calendar.svg";

type AppointmentProps = {
  name: string;
  date: string;
  time: string;
  type?: string;
  image: ImageSourcePropType;
};

export const DoctorAppointmentPhotoCard = (props: AppointmentProps) => {
  const { name, date, time, image, type } = props;

  return (
    <TouchableOpacity style={styles.card}>
      <ImageBackground source={image} style={styles.image} />

      <TouchableOpacity style={styles.videoButton}>
        {type == "OFFLINE" ? (
          <HomeIcon width={24} height={24} />
        ) : (
          <VideoIcon width={24} height={24} />
        )}
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.name}>{name}</Text>
        </View>

        <View style={styles.detailRow}>
          <View style={styles.detailBox}>
            <MiniCalendarIcon />
            <Text style={styles.detailText}>{date}</Text>
          </View>

          <View style={styles.detailBox}>
            <MiniClockIcon />
            <Text style={styles.detailText}>{time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
