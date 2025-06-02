import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
  ImageBackground,
} from "react-native";
import VideoIcon from "../../../resources/assets/icons/Videocamera.svg"; // ton icône vidéo SVG
import HomeIcon from "../../../resources/assets/icons/home.svg"; // ton icône vidéo SVG
import { styles } from "./styles";
import MiniClockIcon from "../../../resources/assets/icons/Min_clock.svg";
import MiniCalendarIcon from "../../../resources/assets/icons/Mini_calendar.svg";
import WhiteBorderedVisionIcon from "../../../resources/assets/icons/WhiteBorderedVisionIcon.svg";
import { moderateScale } from "react-native-size-matters";

type AppointmentProps = {
  name: string;
  specialty: string;
  date: string;
  time: string;
  type?: string;
  // image: string;
  image: ImageSourcePropType;
};

export const AppointmemtPhotoCard = (props: AppointmentProps) => {
  const { name, specialty, date, time, image, type } = props;
  const iconSize = moderateScale(15);
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.card}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.videoContainer}>
          <View />

          <TouchableOpacity style={styles.videoButton}>
            {type == "OFFLINE" ? (
              <HomeIcon width={iconSize} height={iconSize} />
            ) : (
              <VideoIcon width={iconSize} height={iconSize} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.headerRow}>
            <View style={{ flex: 1 / 2 }}>
              <Text style={styles.name}>{name}</Text>
            </View>

            <View style={[styles.specialtyTag, { flex: 1 / 2 }]}>
              <Text style={styles.specialtyText}>{specialty}</Text>
            </View>
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
      </ImageBackground>
    </TouchableOpacity>
  );
};
